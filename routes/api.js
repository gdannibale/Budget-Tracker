const router = require("express").Router();
const Budget = require("../models/budget.js");

router.post("/api/budget", ({ body }, res) => {
  Budget.create(body)
    .then(dbBudget => {
      res.json(dbBudget);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/budget/bulk", ({ body }, res) => {
  Budget.insertMany(body)
    .then(dbBudget => {
      res.json(dbBudget);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/budget", (req, res) => {
  Budget.find({})
    .sort({ date: -1 })
    .then(dbBudget => {
      res.json(dbBudget);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;