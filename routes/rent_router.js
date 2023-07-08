const express = require("express");
const rentController = require("../controllers/rent_controller");

const router = express.Router();

router.post("/", rentController.rentPost);

module.exports = router;
