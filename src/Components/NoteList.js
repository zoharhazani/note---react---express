import Note from './Note';
import AddNote from './AddNote';
const NoteList = ({ notes,handleAddNote,handleDeleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note)=> (
                <Note 
                    id={note.id} 
                    text ={note.text} 
                    title={note.title}
                    date={note.date}
                    handleDeleteNote = {handleDeleteNote}/>
            ))}
            <AddNote handleAddNode = {handleAddNote}/>
        </div>
    );
};

export default NoteList;