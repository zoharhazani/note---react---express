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

  const handleAddNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      title: title,
      date: date.toLocaleString(),
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

  // get the notes in the first time
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/showNotes");
        if (response.ok) {
          const data = await response.json();
          setNotes(data);
        } else {
          console.error("Server error:", response.status);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };

    fetchData();
  }, []);

  // send the notes to the server and save them in the DB
  useEffect(() => {
    const sendData = async () => {
      const token = localStorage.getItem("token");
      if (notes !== null) {
        try {
          const response = await fetch("/api/saveNotes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": token,
            },
            body: JSON.stringify(notes),
          });

          if (response.ok) {
            console.log("Data sent successfully");
          } else {
            console.error("Server error:", response.status);
          }
        } catch (error) {
          console.error("Network error:", error);
        }
      }
    };

    sendData();
  }, [notes]);

  /*
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
  */

  return (
    <>
      <button
        className="login-btn position-loginbtn-home"
        onClick={() => navigate("/")}
      >
        Logout
      </button>
      <div className="container">
        <h1>Notes</h1>
        <div className="notes-list ">
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
          <AddNote handleAddNode={handleAddNote} />
        </div>
        <br />
      </div>
    </>
  );
}

export default Edit;
