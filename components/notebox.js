import React, { Fragment, useState } from "react";
import style from "../styles/note.js";
import axios from "axios";
import { IconButton, Button, Dialog, Typography } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { withStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import Router from "next/router";
import EditIcon from "@material-ui/icons/Edit";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#EBD3AC",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  editButton: {
    position: "absolute",
    right: theme.spacing(7),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, edit, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {edit ? (
        <IconButton
          aria-label="edit"
          className={classes.editButton}
          onClick={edit}
        >
          <EditIcon />
        </IconButton>
      ) : null}
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const NoteBox = (data) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const openEdit = () => {
    setEdit(true);
    setEditTitle(data.data.title);
    setEditContent(data.data.content);
    console.log({ editTitle });
    console.log({ editContent });
    console.log("click");
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  const handleEditTitle = (event) => {
    setEditTitle(event.target.value);
  };

  const handleEditContent = (event) => {
    setEditContent(event.target.value);
  };

  const saveEdit = async () => {
    await axios
      .put(`http://localhost:5000/api/note/${data.data.noteid}`,{title:editTitle, content:editContent})
    setEdit(false);
    data.fetchNotes();
    };

  const handleClickOpen = () => {
    setOpen(true);
    // console.log(data.data.image);
  };

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
  };

  const renderImage = () => {
    if (data.data.image !== null) {
      return (
        
        <img
          src={`http://localhost:5000/images/${data.data.image}`}
          alt="image"
          width={250}
          height={200}
        />
      );
    }
  };

  const handleDelete = async () => {
    console.log("clickdelete");
    console.log(data.data.noteid)
    axios.delete(`http://localhost:5000/api/note/${data.data.noteid}`);
    data.fetchNotes();
  };

  return (
    <Fragment>
      <div className="noteborder">
        <div className="NoteText" onClick={handleClickOpen}>
          {data.data.title}
        </div>
        <div className="XbtnBox">
          <IconButton edge="start" color="inherit" aria-label="close">
            <Close
              color="action"
              style={{ fontSize: "18px" }}
              onClick={handleDelete}
            />
          </IconButton>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
        aria-labelledby="customized-dialog-title"
        open={open}
        disableBackdropClick
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          edit={openEdit}
        >
          {edit ? (
            <div className="center">
              <input
                type="text"
                value={editTitle}
                className="inputchange"
                onChange={handleEditTitle}
              />
            </div>
          ) : (
            <div style={{ fontWeight: 550 }} className="center">
              {data.data.title}
            </div>
          )}
        </DialogTitle>

        <DialogContent edit={openEdit}>
          <div style={{display:'flex'}}>
          <Typography
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems:"center",
            }}
          >
            {renderImage()}
          </Typography>

          <Typography
            gutterBottom
            style={{
              marginBottom: "1%",
              padding: "0 2%",
              textAlign: "justify",
              overflow: "auto"
            }}
          >
            {edit ? (
              <textarea
                type="text"
                value={editContent}
                onChange={handleEditContent}
                cols="100"
                className={`${
                  data.data.image !== null
                    ? "textareachange"
                    : "textareachange noimage"
                }`}
              ></textarea>
            ) : (
              <div
                className={`${
                  data.data.image !== null ? "haveimage" : "noimage"
                }`}
              >
                {data.data.content}
              </div>
            )}
          </Typography>
          </div>
        </DialogContent>
        {edit ? (
        <DialogActions>
          <Button onClick={cancelEdit} color="primary">
            Cancel
          </Button>
          <Button onClick={saveEdit} color="primary">
            Save
          </Button>
        </DialogActions>)
        : null }
      </Dialog>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default NoteBox;
