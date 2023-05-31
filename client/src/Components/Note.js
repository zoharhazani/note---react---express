const Note = ({ id, text, date, title }) => {
  return (
    <div className="note">
      <span>{title}</span>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
      </div>
    </div>
  );
};

export default Note;
