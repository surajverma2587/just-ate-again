const orm = require("../config/orm");

const takeaway = (cb) => {
  orm.getAll(cb);
};

const devoured = (cb) => {
  orm.getAll("devoured_foods", cb);
};

const restock = ({ food }, cb) => {
  orm.insert(food, cb);
};

const food = {
  takeaway,
  devoured,
  restock,
};

module.exports = food;
