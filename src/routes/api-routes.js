const express = require("express");

const router = express.Router();

router.get("/api/foods", (req, res) => {
  res.json({
    message: "GET Foods",
  });
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
