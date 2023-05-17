import { useState } from "react";

import AddNote from "./AddNote";

const Note = ({ id, text, date, title }) => {
  const [Notetext, setNoteText] = useState(text);
  const [Notetitle, setNoteTitle] = useState(title);

  return (
    <div className="note">
      <span>{title}</span>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
      </div>
    </div>
  );
};

export default Note;
