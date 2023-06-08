const Color = require("../models/color");

exports.getColors = (req, res, next) => {
  Color.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
