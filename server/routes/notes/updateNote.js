const express = require("express");
const router = express.Router();
const Note = require("../../models/notesmodel");

router.post("/", async (req, res) => {

    try {
        const noteId = req.body["id"]; // Note ID received in the request parameter
        const updatedNote = req.body; // Updated note data received in the request body

        // Find the note by ID and update it in the database
        const updatedNoteData = await Note.findOneAndReplace({ id: noteId }, updatedNote, { new: true });

        if (!updatedNoteData) {
            return res.status(404).json({ error: "Note not found" });
        }

        return res.json(updatedNoteData);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

});

module.exports = router;