const mongoose = require("../mongooseConnector");

const notesSchema = new mongoose.Schema({
  id: {
    type: String,
    require: false,
  },
  title: {
    type: String,
    require: false,
  },
  text: {
    type: String,
    require: false,
  },
  date: {
    type: Date,
    require: false,
  },
});

const Note = mongoose.model("note", notesSchema);
module.exports = Note;
