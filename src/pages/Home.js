import { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import NotesList from "../Components/NoteList";
import { useNavigate } from "react-router-dom";

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
    <div className="container-home">
      <h1>Notes</h1>
      <NotesList notes={notes ?? []} handleDeleteNote={deleteNote} />
      <br />
      <div className="footer-home">
        <button className="login-btn" onClick={() => navigate("/Login")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
