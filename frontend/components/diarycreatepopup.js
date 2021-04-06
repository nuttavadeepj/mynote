import  React, { Component, Fragment } from "react";
import styles from  "../styles/note.js";
import { IconButton, Button } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import SaveIcon from "@material-ui/icons/Save";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div>
          <div className="popup_inner">
            <div style={{ width: "65%" }}>
              <div>
                <input type="text" placeholder="Add Title" className="input"></input>
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Type text here ..."
                  cols="80"
                  className="textarea"
                ></textarea>
              </div>
            </div>
            <div style={{ width: "20%" }}>
              <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  onChange={this.onImageChange}
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
                  <img className="imginput" src={this.state.image} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', margin: '2% auto'}}>
            <Button
              variant="contained"
              style={{background: "#414C46", color: 'white'}}
              size="small"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </div>
        </div>

        <style jsx>{styles}</style>;
      </Fragment>
    );
  }
}


export default Popup;
