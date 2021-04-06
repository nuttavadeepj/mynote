import React,{ Fragment, useState } from "react";
import styles from "../styles/note.js";
import DiaryBox from './diarybox'
import Popup from "./diarycreatepopup";
import { Dialog, IconButton, Slide} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Diary() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Fragment>
      <div className="tac">
        <div className="NoteBoxTitle">
          <div className="NoteTitle">My Diary</div>
        </div>
        <DiaryBox/>
        <DiaryBox/>
        <DiaryBox/>
        <DiaryBox/>
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
            <Popup />
          </div>
        </div>
      </Dialog><style jsx>{styles}</style>
    </Fragment>
  );
}


