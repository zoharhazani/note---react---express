const express = require("express");

const app = express();
//const saveNoteRouter = require("./routes/notes/saveNotes");
const showNoteRouter = require("./routes/notes/showNotes");
const deleteNoteRouter = require("./routes/notes/deleteNote");
const addNoteRouter = require("./routes/notes/addNote");
const updateNoteRouter = require("./routes/notes/updateNote");
const loginRouter = require("./routes/login");
const Jwt_verify = require("./middleware/jwt_verify");

app.use(express.json());

//app.use("/api/saveNotes", Jwt_verify, saveNoteRouter);
app.use("/api/showNotes", showNoteRouter);
app.use("/api/login", loginRouter);
app.use("/api/deletenote", Jwt_verify, deleteNoteRouter);
app.use("/api/addNote", Jwt_verify, addNoteRouter);
app.use("/api/updateNote", Jwt_verify, updateNoteRouter);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
