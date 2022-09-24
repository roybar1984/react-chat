import "./Login.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [name, setName] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  let history = useHistory();

  useEffect(() => {
    return () => {
      props.setIsOneSubmitted(false);
    };
  }, []);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    if (name !== "" && name.trim() !== "") {
      props.setUsers((users) => ({ ...users, [props.currUser]: name }));
      if (props.isOneSubmitted) {
        history.push("/chat");
      } else {
        setisLoggedIn(true);
        props.setIsOneSubmitted(true);
      }
    }
    setName("");
  }

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <p className="wait-message">
          Hi {props.users[props.currUser]},​ Please Wait for the other user​
        </p>
      ) : (
        <div>
          <h1 className="welcome-title">Welcome to the chat</h1>
          <input
            onChange={handleChange}
            value={name}
            className="name-input"
            type="text"
            placeholder="Enter your name"
          ></input>
          <div
            id={props.userId}
            onClick={handleClick}
            className="go-to-chat-btn"
          >
            Go to the chat!
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
