import { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Note from "Components/Note";

function Home() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const deleteNote = (id) => {
    return false;
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    } else {
      setNotes([]);
    }
  }, []);

  return (
    <>
      <div className="container">
        <h1>Notes</h1>
        <div className="notes-list">
          {notes.map((note) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                text={note.text}
                title={note.title}
                date={note.date}
                handleDeleteNote={deleteNote}
                isActive={false}
              />
            );
          })}
        </div>
      </div>
      <button
        className="login-btn position-loginbtn-home"
        onClick={() => navigate("/Login")}
      >
        Login
      </button>
    </>
  );
}

export default Home;
