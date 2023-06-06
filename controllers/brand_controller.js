const Brand = require("../models/car_brand");

exports.getBrands = (req, res, next) => {
  Brand.findAll()
    .then((result) => {
      console.log(res);
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
