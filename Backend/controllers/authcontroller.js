const Pdf = require("../models/user");

const addPdf = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "PDF file is required" });
        }

        const data = await Pdf.create({
            title: req.body.title,
            pdf: req.file.buffer,
            contenttype: req.file.mimetype
        });

        res.status(201).json({
            message: "PDF Uploaded Successfully",
            data
        });

    } catch (err) {
        res.status(400).json({
            message: "PDF Upload Failed",
            error: err.message
        });
    }
};

const getPdf = async (req, res) => {
    try {
        const data = await Pdf.find();

        res.status(200).json(data);

    } catch (err) {
        res.status(400).json({
            message: "Failed to retrieve PDFs",
            error: err.message
        });
    }
};

module.exports = { addPdf, getPdf };