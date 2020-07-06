const express = require("express");

const Food = require("../models/food");

const router = express.Router();

router.get("/view", function (req, res) {
  const onFindAll = (results) => {
    const devouredFoods = results.filter((result) => result.isDevoured === "1");
    const foods = results.filter((result) => result.isDevoured === "0");
    res.render("devour", { foods, devouredFoods });
  };
  Food.findAll({ raw: true }).then(onFindAll);
});

module.exports = router;
