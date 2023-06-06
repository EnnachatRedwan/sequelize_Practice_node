const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Car=require('./car')

const CarBrand = sequelize.define("car_brand", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  Brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


module.exports = CarBrand;
