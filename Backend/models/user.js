const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    pdf:{
        type:Buffer,
        required:true
    },
    contenttype:{
        type:String,
        default:"application/pdf"
    }
});



module.exports = mongoose.model("pdf",pdfSchema)