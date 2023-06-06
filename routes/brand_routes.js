const express = require("express");
const brandController = require("../controllers/brand_controller");

const router = express.Router();

router.get("/", brandController.getBrands);

module.exports = router;
