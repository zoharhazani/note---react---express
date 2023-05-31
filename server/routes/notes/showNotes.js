const express = require("express");
const router = express.Router();
const Note = require("../../models/notesmodel");

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
