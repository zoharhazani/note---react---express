const express = require("express");
const router = express.Router();
const Note = require("../../models/note");

router.delete("/:noteId", async (req, res) => {
    try {
        const noteId = req.params.noteId; // Note ID received in the request parameter

        // Find the note by ID and delete it from the database
        const deletedNote = await Note.findOneAndDelete({ id: noteId });

        if (!deletedNote) {
            return res.status(404).json({ error: "Note not found" });
        }

        return res.json({ message: "Note deleted successfully" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;