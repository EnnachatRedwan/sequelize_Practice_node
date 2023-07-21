const Car = require("../models/car");

const Color = require("../models/color");
const CarBrand = require("../models/car_brand");
const CarType = require("../models/car_type");

exports.getCars = (req, res, next) => {
  Car.findAll({
    include: [{ model: Color }, { model: CarBrand }, { model: CarType }],
    attributes: ["platenumber", "pricePerDay"],
    order: [["createdAt", "ASC"]],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};

exports.postCar = (req, res, next) => {
  const car = req.body;
  Car.create({
    platenumber: car.plateNumber,
    pricePerDay: car.pricePerDay,
    colorId: car.color.id,
    carBrandId: car.brand.id,
    carTypeId: car.type.id,
  })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.deleteCar = (req, res, next) => {
  const platenumber = req.params.platenumber;
  Car.findByPk(platenumber)
    .then((car) => {
      return car.destroy();
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};

exports.putCar = (req, res, next) => {
  const car = req.body;
  Car.findByPk(car.plateNumber)
    .then((oldCar) =>
      oldCar.update({
        pricePerDay: car.pricePerDay,
        colorId: car.color.id,
        carBrandId: car.brand.id,
        carTypeId: car.type.id,
      })
    )
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};
