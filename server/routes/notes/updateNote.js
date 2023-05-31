const express = require("express");
const router = express.Router();
const Note = require("../../models/note");

router.post("/", async (req, res) => {

    try {
        const { title, text, date, id } = req.body; // Updated note data received in the request body

        // Find the note by ID and update it in the database
        const updatedNoteData = await Note.findOneAndReplace({ id: id }, { title, text, date, id }, { new: true });

        if (!updatedNoteData) {
            return res.status(404).json({ error: "Note not found" });
        }

        return res.json(updatedNoteData);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

});

module.exports = router;