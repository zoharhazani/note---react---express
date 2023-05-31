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

  // set the note onChange 
  function setNote(note) {
    setNotes((oldNotes) =>
      oldNotes.map((element) => {
        if (element.id !== note.id) {
          return element;
        }
        return note;
      })
    );
  }

  // set the note onBlur 
  async function setNoteToDB(note) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/updateNote/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(note),
      });

      if (response.ok) {
        const updatedNote = await response.json();
        setNotes((oldNotes) =>
          oldNotes.map((element) => {
            if (element.id !== updatedNote.id) {
              return element;
            }
            return updatedNote;
          })
        );
        return true;
      } else {
        // Token has expired
        if (response.status === 401) {
          navigate("/login");
        }
        else {
          const errorData = await response.json();
          console.error("Error updating note:", errorData.error);
          return false;
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      return false;
    }
  }

  // handle add note 
  const handleAddNote = async (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      title: title,
      date: date.toLocaleString(),
    };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/addNote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(newNote),
      });

      if (response.ok) {
        // Note added successfully
        const addedNote = await response.json();
        const newNotes = [...(notes ?? []), addedNote];
        setNotes(newNotes);
        return true;
      } else {
        // Token has expired
        if (response.status === 401) {
          navigate("/login");
        }
        else {
          // Handle server error
          const errorData = await response.json();
          console.error("Error adding note:", errorData.error);
          return false;
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      return false;
    }
  };

  // handle delete note 
  const deleteNote = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/deleteNote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (response.ok) {
        // Note deleted successfully
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        return true;
      } else {
        // Token has expired
        if (response.status === 401) {
          navigate("/login");
        }
        else {
          // Handle server error or note not found
          const errorData = await response.json();
          console.error("Error deleting note:", errorData.error);
          return false;
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      return false;
    }
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
    return
  }, []);

  // handle log out from the app 
  const handleLogout = () => {
    // Delete the token from local storage
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <button
        className="login-btn position-loginbtn-home"
        onClick={handleLogout}
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
                setNoteToDB={setNoteToDB}
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
