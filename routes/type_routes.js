const express = require("express");
const typeController = require("../controllers/type_controller");

const router = express.Router();

router.get("/", typeController.getBrands);

module.exports = router;
