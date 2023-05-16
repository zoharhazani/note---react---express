import Note from './Note';
import AddNote from './AddNote';
const NoteList = ({ notes,handleDeleteNote}) => {

    return (
        <div className="notes-list">
            {notes.map((note)=> {

                return <Note 
                    key={note.id}
                    id={note.id} 
                    text ={note.text} 
                    title={note.title}
                    date={note.date}
                    handleDeleteNote = {handleDeleteNote}
                    />
                }
            )}
        
        </div>
    );
};

export default NoteList;