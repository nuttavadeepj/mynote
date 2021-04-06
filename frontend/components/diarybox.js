import React, { Fragment, useState } from "react";
import style from "../styles/note.js";
import {
  IconButton,
  Button,
  Dialog,
  Typography,
  Icon,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { withStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
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
  const { children, classes, edit, onClose, ...other } = props;
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

const DiaryBox = () => {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 

  const openEdit = () => {
    setEdit(true);
    // setEditData({ ...data })
  };
  const cancelEdit = () => {
    setEdit(false);
    // setEditData({ titlethread: '', content: '' })
  };


  return (
    <Fragment>
      <div className="noteborder" onClick={handleClickOpen}>
        <div className="NoteText">Very good day happened</div>
        <div className="XbtnBox">
          <IconButton edge="start" color="inherit" aria-label="close">
            <Close color="action" style={{ fontSize: "18px" }} />
          </IconButton>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'md'}
        aria-labelledby="customized-dialog-title"
        open={open}

      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          edit={openEdit}
        >
          {edit ? (
            <input
              type="text"
              value="Shoping lists today"
              className="inputchange"
            />
          ) : (
            <div style={{ fontWeight: 550 }}>Very good day happened</div>
          )}
        </DialogTitle>

        <DialogContent dividers edit={openEdit}>
          <Typography gutterBottom style={{marginBottom: '2%'}}>
            {edit ? (
              <textarea
              type="text"
              value="(Content) Cras lzsdfjzspdpfk"
              cols="80"
              className="textareachange"
            ></textarea>
            ) : (
              <div style={{boxSizing: 'border-box'}}>(Content) Cras lzsdfjzspdpfk</div>
            )}
          </Typography>
          <Typography
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{ width: "250px", height: "200px" }}
              className="imginput"
            >
              picture
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={cancelEdit} color="primary">
            Cancel
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default DiaryBox;
