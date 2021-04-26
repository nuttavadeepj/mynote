import React,{ Fragment, useState, useEffect } from "react";
import styles from "../styles/note.js";
import NoteBox from './notebox'
import Popup from "./notecreatepopup";
import { Dialog, IconButton, Slide} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Note() {

  const [open, setOpen] = useState(false)
  const [notes, setNotes] = useState([])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:5000/api/note')
    setNotes(res.data)
    console.log(res.data)
  }
  useEffect(() => {
		fetchNotes()
	}, [])
 console.log(notes)
  
  return (
    <Fragment>
      <div className="tac">
        <div className="NoteBoxTitle">
          <div className="NoteTitle">My Note</div>
        </div>
        {notes.map((el, index) => {
          return <Fragment key={index}>
            <NoteBox data={el} fetchNotes={fetchNotes}/>
          </Fragment>
        })}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="Addbtn" onClick={handleClickOpen}>
            +
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth={'lg'}
        disableBackdropClick	
      >
        <div className="popup">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon color="action" fontSize="small" />
            </IconButton>
          </div>
          <div>
            <Popup onClose={() => setOpen(false)}/>
          </div>
        </div>
      </Dialog><style jsx>{styles}</style>
    </Fragment>
  );
}


