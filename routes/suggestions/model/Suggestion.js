const mongoose = require("mongoose");


const SuggestionSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  author: {
    type: String,
  },
  suggestion: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  anonymous: {
    type: Boolean,
  },
  timeCreated: {
      default: Date.now
  }
});

module.exports = mongoose.model("user", SuggestionSchema);