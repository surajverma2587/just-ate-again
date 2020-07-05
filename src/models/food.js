const orm = require("../config/orm");

const takeaway = (cb) => {
  orm.getAll("foods", cb);
};

const food = {
  takeaway,
};

module.exports = food;
