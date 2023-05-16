import { useState } from 'react';
import '../App.css';
import NotesList from '../Components/NoteList';
import {nanoid} from "nanoid";

function Home() {
    const [notes,setNotes] = useState([]);

    const addNote = (text,title) => {
      return false
    
    };
    
    const deleteNote = (id) => {
      return false

    };

      return (
        <div className='container'>
              <h1>Notes</h1>
          <NotesList notes = {notes} handleAddNote={addNote} handleDeleteNote = {deleteNote}/>
        </div>
      );
};

export default Home;