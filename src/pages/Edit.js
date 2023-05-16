import { useState } from 'react';
import 'App.css';
import NotesList from 'Components/NoteList';
import {nanoid} from "nanoid";

function Edit() {
    const [notes,setNotes] = useState([]);

    const addNote = (text,title) => {
    
      const date = new Date();
      const newNote = {
        id:nanoid(),
        text:text,
        title:title,
        date:date.toLocaleDateString()
      };
      const newNotes = [...notes,newNote];
      setNotes(newNotes);
      return true;
    
    };
    
    const deleteNote = (id) => {
      const newNotes = notes.filter( (note) => note.id !== id); 
      setNotes(newNotes);
      return true;
    };
      return (
        <div className='container'>
              <h1>Notes</h1>
          <NotesList notes = {notes} handleAddNote={addNote} handleDeleteNote = {deleteNote}/>
        </div>
      );
};

export default Edit;