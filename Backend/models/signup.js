const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match: [/.+\@.+\..+/]
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    confirmPassword:{
        type:String,
        required:true,
        trim:true
    }   
});

const Signup = mongoose.model("Signup",signupSchema);

module.exports = Signup;