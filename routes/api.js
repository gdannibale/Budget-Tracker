const router = require("express").Router();
const Money = require("../models/money.js");

router.post("/api/money", ({ body }, res) => {
  Money.create(body)
    .then(dbMoney => {
      res.json(dbMoney);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/money/bulk", ({ body }, res) => {
  Money.insertMany(body)
    .then(dbMoney => {
      res.json(dbMoney);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/money", (req, res) => {
  Money.find({})
    .sort({ date: -1 })
    .then(dbMoney => {
      res.json(dbMoney);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;