const express = require("express");

const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000 ;


const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("backend is running successfully");
});


connectDB();
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});

