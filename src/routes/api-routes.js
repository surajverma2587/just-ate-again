const express = require("express");

const Food = require("../models/food");

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
    res.redirect("/view");
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

module.exports = router;
