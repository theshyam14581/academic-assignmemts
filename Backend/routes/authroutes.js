const express = require("express");
const multer = require("multer");
const router = express.Router();

const {addPdf, getPdf} = require("../controllers/authcontroller");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/add", upload.single("pdf"), addPdf);
router.get("/get", getPdf);

module.exports = router;