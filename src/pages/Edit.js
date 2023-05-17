import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import "App.css";
import AddNote from "Components/AddNote";
import EditNote from "Components/EditNote";

function Edit() {
  const [notes, setNotes] = useState(null);
  const navigate = useNavigate();

  function setNote(note) {
    setNotes((oldNotes) =>
      oldNotes.map((element) => {
        if (element.id != note.id) {
          return element;
        }
        return note;
      })
    );
  }

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      title: title,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...(notes ?? []), newNote];
    setNotes(newNotes);
    return true;
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    return true;
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    // if i already have notes
    if (notes !== null) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <>
      <button className="logout-btn" onClick={() => navigate("/")}>
        Logout
      </button>
      <div className="container">
        <h1>Notes</h1>
        <div className="notes-list">
          {notes?.map((note) => {
            return (
              <EditNote
                key={note.id}
                id={note.id}
                text={note.text}
                title={note.title}
                date={note.date}
                handleDeleteNote={deleteNote}
                setNote={setNote}
              />
            );
          })}
        </div>
        <br />
        <AddNote handleAddNode={addNote} />
      </div>
    </>
  );
}

export default Edit;
