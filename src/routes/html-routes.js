const express = require("express");

const food = require("../models/food");

const router = express.Router();

router.get("/", function (req, res) {
  const cb = (foods) => {
    res.render("devour", { foods });
  };
  food.takeaway(cb);
});

module.exports = router;
