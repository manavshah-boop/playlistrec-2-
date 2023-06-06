import React from "react";
import { authEndpoint, clientId, redirectUri } from "./spotify";
import { getTokenFromResponse } from "./spotify";
import "./login.css";

function Login({ onLogin }) {
  const handleLogin = () => {
    window.location.href = getTokenFromResponse;
    window.addEventListener("message", (event) => {
      const token = event.data.access_token;
      if (token) {
        onLogin(token);
      }
    });
  };

  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
      />
      <button onClick={handleLogin}>LOGIN WITH SPOTIFY</button>
    </div>
  );
}

export default Login;
