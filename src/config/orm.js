const connection = require("./connection");

const getAll = (cb) => {
  const queryFoods = "SELECT * FROM foods";
  const queryDevouredFoods =
    "SELECT * FROM foods INNER JOIN devoured_foods ON foods.id=devoured_foods.food_id";
  const query = `${queryFoods};${queryDevouredFoods}`;

  const onQuery = (err, [foods, devouredFoods]) => {
    if (err) throw err;
    cb({ foods, devouredFoods });
  };

  connection.query(query, onQuery);
};

const insert = (food, cb) => {
  const query = `INSERT INTO foods (name) VALUES ("${food}")`;

  const onQuery = (err, rows) => {
    if (err) throw err;
    cb(rows);
  };

  connection.query(query, onQuery);
};

const orm = {
  getAll,
  insert,
};

module.exports = orm;
