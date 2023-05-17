import Note from "./Note";
const NoteList = ({ notes, handleDeleteNote, isNoteActive }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            title={note.title}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
            isActive={isNoteActive}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
