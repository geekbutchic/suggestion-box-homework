const express = require("express");
const router = express.Router();

async function getAllSuggestions(req, res) {
  try {
    let foundAllSuggestions = await User.find({});
    res.json({ message: "success", data: foundAllSuggestions });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}

module.exports = router;
