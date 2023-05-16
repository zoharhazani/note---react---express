import { useState } from "react";

const AddNote = ({handleAddNode}) => {
    const [noteText,setNoteText] = useState("");
    const [noteTitle,setNoteTitle]=useState("");
    const [enable,setEnable]=useState("");

    const handleSaveClick = ()=> {
        if(noteText.trim().length > 0)
        {
            handleAddNode(noteText,noteTitle);
            setNoteText("");
            setNoteTitle("");
        }   
    };
    
    return (
       <div className="note new">
        <input 
            className="inputTitle"
            type="text" 
            placeholder="title"
            value={noteTitle}
            onChange={(e)=> setNoteTitle(e.target.value)}
        ></input>
        <br/>
        <textarea 
           rows="8"
           cols="10"
           placeholder="Type to add a note..."
           value={noteText}
           onChange={(e)=>setNoteText(e.target.value)}
        ></textarea>
        <div className="note-footer">
            <small></small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
       </div> 
    );
};

export default AddNote;