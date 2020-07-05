const connection = require("./connection");

const getAll = (table, cb) => {
  const query = `SELECT * FROM ${table}`;

  const onQuery = (err, rows) => {
    if (err) throw err;
    cb(rows);
  };

  connection.query(query, onQuery);
};

const orm = {
  getAll,
};

module.exports = orm;
