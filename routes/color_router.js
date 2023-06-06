const express = require("express");
const colorController = require("../controllers/color_controller");

const router = express.Router();

router.get("/", colorController.getColors);

module.exports = router;
