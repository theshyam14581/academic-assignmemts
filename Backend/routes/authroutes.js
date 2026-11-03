const express = require("express");
const router = express.Router();

const {addPdf, getPdf} = require("../controllers/authcontroller");

router.post("/add", addPdf);
router.get("/get", getPdf);

module.exports = router;