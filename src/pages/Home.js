import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import NotesList from '../Components/NoteList';

function Home() {
    const [notes,setNotes] = useState([]);

    const deleteNote = (id) => {
      return false

    };

    useEffect(() => {
      const storedNotes = localStorage.getItem('notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      } else {
        setNotes([]);
      }
    }, []);

      return (
        <div className='container'>
              <h1>Notes</h1>
          <NotesList notes = {notes??[]}  handleDeleteNote = {deleteNote}/>
        </div>
      );
};

export default Home;