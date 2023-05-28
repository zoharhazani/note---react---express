const express = require("express");
const router = express.Router();
const Note = require("../models/notesmodel");

/*
router.post("/", async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.Note.title,
      id: req.body.Note.id,
      text: req.body.Note.text,
      date: req.body.Note.date,
    });
    console.log(newNote);
    await newNote.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
*/

router.post("/", async (req, res) => {
  try {
    const newNotes = req.body; // Assuming the request body contains the new array of notes

    console.log({ newNotes });

    // Update the collection with the new array of notes
    await Note.deleteMany({}); // Remove all existing notes
    await Note.insertMany(newNotes); // Insert the new array of notes

    res.sendStatus(200);
  } catch (error) {
    console.log({ error });
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
