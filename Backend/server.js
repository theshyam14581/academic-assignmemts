const express = require("express");

const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db")
const pdfRouter = require("./routes/authroutes")
const PORT = process.env.PORT || 5000 ;


const app = express();


app.use(cors());
app.use(express.json());


connectDB();
app.use("/pdf", pdfRouter);


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});

