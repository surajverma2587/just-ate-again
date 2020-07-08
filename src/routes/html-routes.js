const express = require("express");

const Food = require("../models/food");

const router = express.Router();

router.get("/deprecated_v1", (req, res) => {
  const onFindAll = (results) => {
    const devouredFoods = results.filter((result) => result.isDevoured === "1");
    const foods = results.filter((result) => result.isDevoured === "0");
    res.render("devour", { foods, devouredFoods });
  };
  Food.findAll({ raw: true }).then(onFindAll);
});

router.get("/restaurant_list", (req, res) => {
  const foo = {};
  res.render("restaurant_list", { foo });
});

router.get("/menu/:id", (req, res) => {
  const foo = {};
  res.render("menu", { foo });
});

router.get("/basket", (req, res) => {
  const foo = {};
  res.render("basket", { foo });
});

module.exports = router;
