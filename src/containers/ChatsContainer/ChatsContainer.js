import "./ChatsContainer.css";
import React, { useEffect } from "react";
import Chat from "../Chat/Chat";

function ChatsContainer(props) {
  const { sentMessages, setSentMessages, user1, user2 } = props;
  useEffect(() => {
    props.setSentMessages([]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="chats-container">
      <Chat
        userId={1}
        userName={user1}
        sentMessages={sentMessages}
        setSentMessages={setSentMessages}
      />
      <hr />
      <Chat
        userId={2}
        userName={user2}
        sentMessages={sentMessages}
        setSentMessages={setSentMessages}
      />
    </div>
  );
}

export default ChatsContainer;
