import React, { Fragment } from "react";
import styles from "../styles/note";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

export default function Note() {
  return (
    <Fragment>
      <div className="tac">
        <div className="NoteBoxTitle" style={{ width: "250px" }}>
          <div className="NoteTitle">Problem Report</div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "700px",
              height: "450px",
              borderRadius: "5px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form>
              <div style={{ margin: "8% 0 3%", width: "400px" }}>
                <TextField
                  id="email"
                  label="Your email"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  id="report"
                  label="Report problem"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={12}
                />
              </div>
              <div style={{ margin: "6% auto" }}>
                <Button
                  variant="contained"
                  style={{ background: "#414C46", color: "white" }}
                  size="small"
                  startIcon={<SendIcon />}
                  // onClick={handleSubmit}
                >
                  SEND
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </Fragment>
  );
}
