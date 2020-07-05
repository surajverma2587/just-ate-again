const orm = require("../config/orm");

const takeaway = (cb) => {
  orm.getAll(cb);
};

const devoured = (cb) => {
  orm.getAll("devoured_foods", cb);
};

const food = {
  takeaway,
  devoured,
};

module.exports = food;
