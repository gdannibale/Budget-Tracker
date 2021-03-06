const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
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

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;