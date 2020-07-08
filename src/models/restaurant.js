const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const schema = {
  name: {
    type: Sequelize.STRING(50),
    validate: {
      len: [2, 50],
    },
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(150),
    validate: {
      len: [2, 150],
    },
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

const restaurant = sequelize.define("restaurant", schema);

restaurant.sync();

module.exports = restaurant;
