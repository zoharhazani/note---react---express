const express = require("express");

const app = express();
const saveNoteRouter = require("./routes/saveNotes");
const showNoteRouter = require("./routes/showNotes");
const loginRouter = require("./routes/login");
const Jwt_verify = require("./middleware/jwt_verify");

app.use(express.json());

app.use("/api/saveNotes", Jwt_verify, saveNoteRouter);
app.use("/api/showNotes", showNoteRouter);
app.use("/api/login", loginRouter);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
