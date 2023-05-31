const express = require("express");
const router = express.Router();
const Note = require("../../models/notesmodel");

router.post("/", async (req, res) => {

    try {
        const { id, text, title, date } = req.body;

        const newNote = new Note({
            id, text, title, date,
        });

        const savedNote = await newNote.save();
        return res.status(201).json(savedNote);
    }
    catch {
        return res.status(400).json({ error: error.message });
    }

});

module.exports = router;