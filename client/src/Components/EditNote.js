import { MdDeleteForever } from "react-icons/md";

const EditNote = ({ id, text, date, title, handleDeleteNote, setNote, setNoteToDB }) => {
  return (
    <div className="note new">
      <input
        className="inputTitle"
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) =>
          setNote({
            id,
            title: e.target.value,
            date: new Date().toLocaleString(),
            text,
          })
        }
        onBlur={(e) =>
          setNoteToDB({
            id,
            title: e.target.value,
            date: new Date().toLocaleString(),
            text,
          })
        }
      ></input>
      <br />
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={text}
        onChange={(e) =>
          setNote({
            id,
            text: e.target.value,
            date: new Date().toLocaleString(),
            title,
          })
        }
        onBlur={(e) =>
          setNoteToDB({
            id,
            title,
            date: new Date().toLocaleString(),
            text: e.target.value,
          })
        }
      ></textarea>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          id="btnDelete"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};
export default EditNote;
