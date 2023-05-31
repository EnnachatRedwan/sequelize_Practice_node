const Sequelize = require("sequelize");
const sequelize =require( "../utils/database");

const Client = sequelize.define("client", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  fullname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Client;
