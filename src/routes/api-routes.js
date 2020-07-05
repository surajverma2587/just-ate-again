const express = require("express");

const food = require("../models/food");

const router = express.Router();

router.get("/api/foods", (req, res) => {
  const cb = (foods) => {
    res.json({ foods });
  };
  food.takeaway(cb);
});

router.get("/api/devouredFoods", (req, res) => {
  const cb = (devouredFoods) => {
    res.json({ devouredFoods });
  };
  food.devoured(cb);
});

router.post("/api/foods", (req, res) => {
  res.json({
    message: "POST Food",
  });
});

router.put("/api/foods/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `PUT Food - ${id}`,
  });
});

module.exports = router;
