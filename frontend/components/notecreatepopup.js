import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/note.js";
import { IconButton, Button } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";

export default function Popup() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [imgURL,setImgURL] = useState('')

  const handleChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
      setImgURL(URL.createObjectURL(img))
      console.log(img);
    }
  };
  
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  }
  
  const createNote = () => {
		console.log(title, image, content);
	}

  return (
    <Fragment>
      <div>
        <div className="popup_inner">
          <div style={{ width: "65%" }}>
            <div>
              <input
                type="text"
                placeholder="Add Title"
                className="input"
                onChange={handleChangeTitle}
              ></input>
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Type text here ..."
                cols="80"
                className="textarea"
                onChange={handleChangeContent}
              ></textarea>
            </div>
          </div>
          <div style={{ width: "20%" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  onChange={handleChangeImage}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="action"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                    <div
                      style={{
                        fontSize: "18px",
                        width: "100px",
                        fontFamily: "monospace",
                      }}
                    >
                      Add Photo
                    </div>
                  </IconButton>
                </label>
              </div>
              <div>
                <img className="imginput" src={imgURL} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2% auto",
          }}
        >
          <Button
            variant="contained"
            style={{ background: "#414C46", color: "white" }}
            size="small"
            startIcon={<SaveIcon />}
            onClick={createNote}
          >
            Save
          </Button>
        </div>
      </div>
      <style jsx>{styles}</style>;
    </Fragment>
  );
}
