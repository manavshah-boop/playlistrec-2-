import React, { useState } from "react";
import Login from "./Login";
import Player from "./Playlist";
import { getTokenFromResponse } from "./spotify";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (response) => {
    const token = getTokenFromResponse(response);
    setToken(token);
  };

  return (
    <div className="app">
      {!token ? <Login onLogin={handleLogin} /> : <Player token={token} />}
    </div>
  );
}

export default App;
