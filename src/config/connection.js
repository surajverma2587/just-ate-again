const Sequelize = require("sequelize");

const dbOptions = {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};

const sequelize = new Sequelize("takeaway_db", "root", "password", dbOptions);

module.exports = sequelize;
