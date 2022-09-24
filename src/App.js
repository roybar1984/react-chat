import "./App.css";
import React, { useState } from "react";
import ChatsContainer from "./containers/ChatsContainer/ChatsContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginsContainer from "./containers/LoginsContainer/LoginsContainer";

function App() {
  const [sentMessages, setSentMessages] = useState([]);
  const [users, setUsers] = useState({ user1: "", user2: "" });
  const [isOneSubmitted, setIsOneSubmitted] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginsContainer
            isOneSubmitted={isOneSubmitted}
            setIsOneSubmitted={setIsOneSubmitted}
            users={users}
            setUsers={setUsers}
          />
        </Route>
        <Route path="/chat">
          <ChatsContainer
            user1={users.user1}
            user2={users.user2}
            sentMessages={sentMessages}
            setSentMessages={setSentMessages}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
