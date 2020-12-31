const router = require("express").Router();
const Money = require("../models/account.js");

router.post("/api/account", ({ body }, res) => {
  Money.create(body)
    .then(dbMoney => {
      res.json(dbMoney);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/account/bulk", ({ body }, res) => {
  Money.insertMany(body)
    .then(dbBudget => {
      res.json(dbBudget);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/account", (req, res) => {
  Money.find({})
    .sort({ date: -1 })
    .then(dbBudget => {
      res.json(dbBudget);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;