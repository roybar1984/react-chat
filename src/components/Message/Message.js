import React from "react";
import "./Message.css";

function Message(props) {
  const { userName, strMessage } = props.message;

  return (
    <div className={`${
      !props.bIsMe ? "left-messages" : "right-messages"
    } `}>
      <div
        className={`message-container message ${
          !props.bIsMe ? "recieved-message" : "my-message"
        } `}
      >
        <div className={`${!props.bIsMe ? "colored-title" : ""} user-name `}>
          {" "}
          {props.bIsMe ? `me` : userName}:
        </div>
        <li
          ref={props.ref}
          // className="text-message"
          // className="message"
          // className={`${props.bIsMe ? "my-message" : "recieved-message"} message`}
        >
          {strMessage}
        </li>
      </div>
    </div>
  );
}

export default Message;

