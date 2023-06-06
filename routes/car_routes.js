const express = require("express");
const carController = require("../controllers/car_controller");

const router = express.Router();

router.get("/", carController.getCars);

module.exports = router;
