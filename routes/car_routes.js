const express = require("express");
const carController = require("../controllers/car_controller");

const router = express.Router();

router.get("/", carController.getCars);

router.post("/", carController.postCar);

router.put("/", carController.putCar);

router.delete("/:platenumber", carController.deleteCar);

module.exports = router;
