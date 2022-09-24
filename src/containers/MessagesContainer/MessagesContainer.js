import React, { useRef, useEffect } from "react";
import "./MessagesContainer.css";
import Message from "../../components/Message/Message.js";

function MessagesContainer(props) {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollTop =
      divRef.current.scrollHeight - divRef.current.clientHeight;
  }, [props.sentMessages]);

  return (
    <div ref={divRef} className="message-list">
      <ul className=" messages-container">
        {props.sentMessages.map((message, index) => {
          return (
            <Message
              bIsMe={props.userId === message.userId}
              chatId={props.userId}
              key={index}
              message={message}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MessagesContainer;
