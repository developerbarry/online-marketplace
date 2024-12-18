const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
var cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200

}

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());



//JWT Middleware
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send({ message: "Unauthorized Access" });
    }

    jwt.verify(token, process.env.TOKEN_SECRECT, (error, decoded) => {
        if (error) {
            return res.status(401).send({ message: "Unauthorized Access" });
        }

        req.user = decoded;
        next();
    });
};



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iam7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const database = client.db('marketplaceDB');
        const jobs = database.collection('jobs')
        const bids = database.collection('bids')


        app.post('/jwt', async (req, res) => {
            const userEmail = req.body;
            const token = jwt.sign(userEmail, process.env.TOKEN_SECRECT, { expiresIn: '1d' });
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                maxAge: 24 * 60 * 60 * 1000,
                path: '/'
            })

            res.send({ success: true })
        })


        app.post('/logout', async (req, res) => {
            const email = req.body;
            console.log(email)
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                maxAge: 0,
                path: '/'
            });

            res.send({ success: true })
        })



        app.get('/jobs', async (req, res) => {

            // console.log(req.query)
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);
            const categoryName = req.query?.filter;
            const sort = req.query?.sort;
            const searchText = req.query.search;
            // console.log(searchText)

            let query = {};
            if (categoryName) {
                query = { job_categories: categoryName }
            }


            let options = {};
            if (sort) {
                options = { sort: { deadline: sort === 'asc' ? 1 : -1 } }
            }


            if (searchText) query.job_title = { $regex: searchText, $options: 'i' };


            const cursor = jobs.find(query, options).skip(page * size).limit(size);
            const result = await cursor.toArray();
            res.send(result)
        })



        // All Jobs Counts
        app.get('/jobs-count', async (req, res) => {

            const search = req.query.search;

            let query = {};
            if (req.query?.filter) {
                query = { job_categories: req.query?.filter }
            }

            if (search) query.job_title = { $regex: search, $options: 'i' };
            
            const result = await jobs.countDocuments(query);
            res.send({ result })
        })



        // Get individual job
        app.get('/job/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await jobs.findOne(query);
            res.send(result)
        })


        //Added Job
        app.post('/job', async (req, res) => {
            const job = req.body;
            const result = await jobs.insertOne(job);
            res.send(result)
        })

        //Update Job
        app.put('/job/:id', async (req, res) => {
            const id = req.params.id;
            const jobInfo = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    ...jobInfo
                }
            }

            const result = await jobs.updateOne(filter, updatedDoc, options);
            res.send(result)
        })

        // Delete Job
        app.delete('/job/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await jobs.deleteOne(query);
            res.send(result)
        })


        // Route for querying bids by email
        app.get('/bids', verifyToken, async (req, res) => {

            if (req.query?.email !== req.user?.email) {
                return res.status(403).send({ message: "Forbidden" })
            }

            let query = {};
            if (req.query?.email) {
                query = { email: req.query?.email };
            }

            const cursor = bids.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })


        // Route for querying bids by buyer_info.email
        app.get('/bids/buyer', verifyToken, async (req, res) => {

            if (req.query?.email !== req.user?.email) {
                return res.status(403).send({ message: "Forbidden" })
            }


            let query = {};
            if (req?.query?.email) {
                query = { 'buyer_info.email': req.query.email };
            }

            const cursor = bids.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });

        app.patch('/bid/:id', async (req, res) => {
            const id = req.params.id;
            const bidBody = req.body;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = {
                $set: {
                    status: bidBody?.status
                }
            }

            const result = await bids.updateOne(filter, updatedDoc);
            res.send(result)
        })




        // Apply bid 
        app.post('/bid', async (req, res) => {
            const bid = req.body;

            //Check if the job already applied;

            const alreadyApplied = await bids.findOne({
                jobId: bid?.jobId,
                email: bid?.email
            })

            if (alreadyApplied) {
                return res.status(400).send('You have already Applied')
            }


            const result = await bids.insertOne(bid);
            res.send(result)
        })




        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Online MarketPlace Server is Running!')
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})