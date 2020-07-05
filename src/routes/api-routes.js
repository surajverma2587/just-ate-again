const express = require("express");

const food = require("../models/food");

const router = express.Router();

router.get("/api/foods", (req, res) => {
  const cb = (result) => {
    res.json(result);
  };
  food.takeaway(cb);
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
