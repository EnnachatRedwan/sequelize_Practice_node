const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "car_rental",
  host: "localhost",
  password: "radwan456",
  username: "root",
  dialect: "mysql",
});

module.exports = sequelize;
