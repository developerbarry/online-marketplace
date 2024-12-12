const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200

}

//middleware
app.use(cors());
app.use(express.json());



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

        app.get('/jobs', async (req, res) => {

            let query = {};
            if (req.query?.email) {
                query = { 'buyer_info.email': req.query.email }
            }

            const cursor = jobs.find(query);
            const result = await cursor.toArray();
            res.send(result)
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


        //Bids

        app.get('/bids', async (req, res) => {
            console.log(req.query)
            let query = {};
            if (req?.query?.email) {
                query = { email: req?.query?.email };
            }

            const cursor = bids.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })

        // Apply bid 
        app.post('/bid', async (req, res) => {
            const bid = req.body;
            const result = await bids.insertOne(bid);
            res.send(result)
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
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