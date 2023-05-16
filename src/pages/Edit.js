import { useState } from 'react';
import { useEffect } from 'react';
import 'App.css';
import NotesList from 'Components/NoteList';
import AddNote from 'Components/AddNote';
import {nanoid} from "nanoid";

function Edit() {
    const [notes,setNotes] = useState(null);

    const addNote = (text,title) => {  
      const date = new Date();
      const newNote = {
        id:nanoid(),
        text:text,
        title:title,
        date:date.toLocaleDateString()
      };

      const newNotes = [...(notes??[]),newNote];
      setNotes(newNotes);
      return true;
    
    };
    
    const deleteNote = (id) => {
      const newNotes = notes.filter( (note) => note.id !== id); 
      setNotes(newNotes);
      return true;
    };

    useEffect(() => {
      const storedNotes = localStorage.getItem('notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    }, []); 

    useEffect(() => {

      // if i already have notes
      if(notes !== null) {
        localStorage.setItem('notes', JSON.stringify(notes));
      }
    }, [notes]); 


      return (
        <div className='container'>
          <h1>Notes</h1>
          <NotesList notes = {notes ?? []} handleDeleteNote = {deleteNote}  />
          <br/>
          <AddNote handleAddNode = {addNote}/>
        </div>
      );
};

export default Edit;