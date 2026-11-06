
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const pdfRouter = require("./routes/authroutes");
const signupRouter = require("./routes/signuproute");
const loginRouter = require("./routes/loginroutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/pdf", pdfRouter);
app.use("/api", signupRouter);
app.use("/api", loginRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
