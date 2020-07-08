const express = require("express");

const Food = require("../models/food");
// const restaurant = require("../models/restaurant");

const router = express.Router();

router.get("/deprecated_v1", (req, res) => {
  const onFindAll = (results) => {
    const devouredFoods = results.filter((result) => result.isDevoured === "1");
    const foods = results.filter((result) => result.isDevoured === "0");
    res.render("devour", { foods, devouredFoods });
  };
  Food.findAll({ raw: true }).then(onFindAll);
});

router.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await restaurant.findAll({
      raw: true,
    });

    res.render("restaurants", { restaurants });
  } catch (error) {
    console.log("Restaurants 500 Error: ", error.message);
    res.render("error");
  }
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
