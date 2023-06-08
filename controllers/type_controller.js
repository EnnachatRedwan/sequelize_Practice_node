const Type = require("../models/car_type");

exports.getBrands = (req, res, next) => {
  Type.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
