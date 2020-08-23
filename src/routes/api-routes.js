const express = require("express");

const Food = require("../models/food");
const restaurant = require("../models/restaurant");

const router = express.Router();

router.get("/api/foods", (req, res) => {
  const onFindAll = (results) => {
    const devouredFoods = results.filter((result) => result.isDevoured === "1");
    const foods = results.filter((result) => result.isDevoured === "0");
    res.json({ foods, devouredFoods });
  };
  Food.findAll({}).then(onFindAll);
});

router.post("/api/foods", (req, res) => {
  const payload = req.body;

  const onCreate = () => {
    res.status(201).send({ message: "this works" });
  };

  Food.create(payload).then(onCreate);
});

router.put("/api/foods/:id", (req, res) => {
  const { id } = req.params;

  const onUpdate = () => {
    res.end();
  };

  Food.update(
    {
      isDevoured: true,
    },
    {
      where: {
        id,
      },
    }
  ).then(onUpdate);
});

router.get("/api/restaurants", async (req, res) => {
  try {
    const restaurants = await restaurant.findAll({
      raw: true,
    });
    res.json({ restaurants });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
