const express = require("express");

const app = express();
const saveNoteRouter = require("./routes/saveNotes");
const showNoteRouter = require("./routes/showNotes");
const getUserDetailRouter = require("./routes/getUserDetail");

app.use(express.json());

app.use("/api/saveNotes", saveNoteRouter);
app.use("/api/showNotes", showNoteRouter);
app.use("/api/getUserDetail", getUserDetailRouter);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
