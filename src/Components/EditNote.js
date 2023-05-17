import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const EditNote = ({ id, text, date, title, handleDeleteNote, setNote }) => {
  const [noteText, setNoteText] = useState(title);
  const [noteTitle, setNoteTitle] = useState(text);

  useEffect(() => {
    setNote({ id, text: noteText, date, title: noteTitle });
  }, [noteText, noteTitle]);

  return (
    <div className="note new">
      <input
        className="inputTitle"
        type="text"
        placeholder="title"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      ></input>
      <br />
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          id="btnDelete"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};
export default EditNote;
