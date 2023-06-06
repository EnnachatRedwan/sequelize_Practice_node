const Sequelize = require("sequelize");

const sequelize = require("../utils/database");


const CarType = sequelize.define("car_type", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  Type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});



module.exports=CarType;
