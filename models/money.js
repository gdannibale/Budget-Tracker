const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moneySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for deposit or withdrawal"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model("Money", moneySchema);

module.exports = Transaction;