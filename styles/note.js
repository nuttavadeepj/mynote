import css from "styled-jsx/css";
export default css`


.input {
  margin: 1% auto 2%;
  padding: 5px 4%;
  font-size: 18px;
  font-weight: 550;
  border-style: none;
  width: 100%;
  text-align: center;
}

.inputchange {
  margin: 0;
  padding: 2px 5px;
  background-color: #EBD3AC;
  font-size: 20px;
  font-weight: 550;
  text-align: center;
}

.textarea {
  width: 100%;
  height: 45vh;
  font-size: 16px;
  padding: 2% 4%;
  border-style: none;
  resize: none;
}

.textareachange {
  box-sizing: border-box;
  width: 100%;
  height: 69vh;
  font-size: 16px;
  padding: 2% ;
  resize: none;
}

.box {
  width: 500px;
}

disabled {
  overflow-x: hidden; 
  overflow-y: scroll; 
}

.typonopic {
  marginBottom: 1%;
  padding: 0 2% 0 4%
  textAlign: justify;
  overflow: auto;
  width: 100%;
}

.typo {
  marginBottom: 1%;
  padding: 0 2% 0 4%
  textAlign: justify;
  overflow: auto;
  width: 70%;
}

.haveimage{
  box-sizing: border-box;
  height: 69vh;
  width: 100%;
 
}

.noimage {
  box-sizing: border-box;
  height: 69vh;
  width: 100%;
}

.editnoimage {

}

.NoteBoxTitle {
  border: solid none 2px;
  width: 200px;
  background-color: #414c46;
  margin: 3% auto 0;
  box-shadow: 5px 5px 1px black;
}

input[type="file"] {
  background-color: #ebd3ac;
  cursor: pointer;
}

.imginput {
  width: 100%;
  height: 30vh;
  border: #999999 dashed 1px;
}

.imgdec {
  width: 100%;
  height: 30vh;
}

.NoteTitle {
  font-size: 30px;
  font-family: fantasy;
  color: white;
  padding: 6px;
  margin-bottom: 30%;
}

.noteborder {
  border: solid none 2px;
  background-color: #ebd3ac;
  margin: 0 auto 1.5%;
  border-radius: 10px;
  width: 65%;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 5%;
  box-shadow: 3px 3px 3px #696e6c;
  cursor: pointer;
}
.noteborder:hover {
  box-shadow: 0 6px 14px 0 #666;
  transform: scale(1.05);
}

.NoteText {
  font-size: 20px;
  font-weight: 550;
  width: 95%;
  display: flex;
  justify-content: flex-start;
}

.XbtnBox {
  width: 5%;
  display: "flex";
  flex-direction: column;
  height: 100%;
}

.Addbtn {
  width: 60px;
  height: 60px;
  background-color: #c04537;
  font-family: cursive;
  font-weight: 700;
  border-radius: 50%;
  box-shadow: 0 6px 10px 0 #666;
  transition: all 0.1s ease-in-out;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #414c46;

  font-size: 70px;
  color: white;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  margin: 2% auto 4%;
}

.Addbtn:hover {
  box-shadow: 0 6px 14px 0 #666;
  transform: scale(1.05);
}

.center {
  display: flex;
  justify-content: center;
}

.title {
  margin: 0;
    padding: 2px;
    background-color: #EBD3AC;
}

.popup {
  background: #ebd3ac;
}

.popup_inner {
  align-items: center;
  display: flex;
  justify-content: space-around;
}

.tac {
    text-align: center;
}
`;
