const Sequelize = require("sequelize");

const sequelize = require("../config/connection.js");

const schema = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isDevoured: {
    type: Sequelize.STRING,
    defaultValue: false,
    field: "is_devoured",
  },
};

const Food = sequelize.define("food", schema);

Food.sync();

module.exports = Food;
