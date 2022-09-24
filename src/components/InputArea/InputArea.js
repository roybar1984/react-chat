import React from "react";
import sendButton from "./../../media/send.svg";
import "./InputArea.css";

function InputArea(props) {
  return (
    <div className="input-container">
      <img
        onClick={props.handleClick}
        className="send-btn"
        src={sendButton}
        alt="send-btn"
        id={props.classUser}
      />
      <input
        placeholder="write something..."
        onChange={props.handleChange}
        className="input-box"
        type="text"
        value={props.value}
        onKeyDown={props.onKeyDown}
      ></input>
    </div>
  );
}

export default InputArea;
