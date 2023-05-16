import { MdDeleteForever} from "react-icons/md";

const Note = ({id,text,date,title, handleDeleteNote}) =>{

    return(
        <div className="note" >
            <span>{title}</span>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em" id="btnDelete" onClick={ () => handleDeleteNote(id) }/>
            </div>
        </div>
    )

    
};
export default Note;
  