const User = require("../models/user");

const addPdf = async (req, res) => {
    let data = await User.create(req.body);
    try{
        res.status(200).json({
        message: "User Registered Successfully",
        data: data
    });
    }
    catch(err){
        res.status(400).json({
            message: "User Registration Failed",
            error: err.message
        });
    }
}
 const getPdf = async (req, res) => {
    try{
        let data = await User.find();
        res.status(200).json({
            message: "Users retrieved successfully",
            data: data
        });
    }
    catch(err){
        res.status(400).json({
            message: "Failed to retrieve users",
            error: err.message
        });
    }
}

module.exports = {addPdf, getPdf};