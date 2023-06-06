const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Car = require("./car");
const Client = require("./client");

const Rent = sequelize.define("rent", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  rent_date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  return_date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

Rent.belongsTo(Client);
Rent.belongsTo(Car);

module.exports = Rent;
