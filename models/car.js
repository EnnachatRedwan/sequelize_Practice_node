const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Color = require("./color");
const CarType = require("./car_type");
const CarBrand = require("./car_brand");

const Car = sequelize.define("car", {
  platenumber: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  pricePerDay: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

Car.belongsTo(Color);
Car.belongsTo(CarType);
Car.belongsTo(CarBrand);

module.exports = Car;
