import React from "react";
import Login from "./../Login/Login"

function LoginsContainer(props) {
  const {
    isOneSubmitted,
    setIsOneSubmitted,
    users,
    setUsers,
  } = props;
  return (
    <div className="chats-container">
      <Login
        userId={1}
        isOneSubmitted={isOneSubmitted}
        setIsOneSubmitted={setIsOneSubmitted}
        currUser={"user1"}
        users={users}
        setUsers={setUsers}
      />
      <hr />
      <Login
        userId={2}
        isOneSubmitted={isOneSubmitted}
        setIsOneSubmitted={setIsOneSubmitted}
        currUser={"user2"}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}

export default LoginsContainer;
