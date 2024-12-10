const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200

}

//middleware
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Online MarketPlace Server is Running!')
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})