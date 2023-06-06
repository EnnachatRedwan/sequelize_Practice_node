const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Car = require("./car");

const Color = sequelize.define("color", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Color;
