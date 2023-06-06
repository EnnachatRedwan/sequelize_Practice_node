const Car = require("../models/car");

const Color = require("../models/color");
const CarBrand = require("../models/car_brand");
const CarType = require("../models/car_type");

exports.getCars = (req, res, next) => {
  Car.findAll({
    include: [{ model: Color }, { model: CarBrand }, { model: CarType }],
    attributes:['platenumber']
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
