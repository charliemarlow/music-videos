import React, { useState } from "react";
import "./App.css";
import { Button, TextField } from "@material-ui/core";

function App(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernamePasswordShowing, setIsUsernamePasswordShowing] = useState(
    false
  );

  return (
    <div className="App">
      <h1>Hey!</h1>
      <TextField
        label="Spotify Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Spotify Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => setIsUsernamePasswordShowing((old) => !old)}>
        Submit
      </Button>
      {isUsernamePasswordShowing && (
        <>
          <h1>{username}</h1>
          <h1>{password}</h1>
        </>
      )}
    </div>
  );
}

export default App;
