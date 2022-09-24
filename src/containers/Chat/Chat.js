import React, { useState } from "react";
import "./Chat.css";
import Title from "./../../components/Title/Title.js";
import MessagesContainer from "./../MessagesContainer/MessagesContainer.js";
import InputArea from "./../../components/InputArea/InputArea.js";

function Chat(props) {
  const [message, setMessage] = useState("");

  function handleChange(event) {
    setMessage(event.target.value);
  }

  const handleClick = (event) => {
    if (message !== "" && (message.trim() !== "")) {
      props.setSentMessages((sentMessages) => [
        ...sentMessages,
        {
          userId: props.userId,
          userName: props.userName,
          strMessage: message,
          id: sentMessages.length,
        },
      ]);
    }
    setMessage("");
  };

  return (
    <div className={`chat-container`}>
      <Title user={props.userName} userId={props.userId} />
      <MessagesContainer
        sentMessages={props.sentMessages}
        userId={props.userId}
      />
      <InputArea
        handleClick={handleClick}
        handleChange={handleChange}
        value={message}
      />
    </div>
  );
}

export default Chat;
