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

const orm = {
  getAll,
};

module.exports = orm;
