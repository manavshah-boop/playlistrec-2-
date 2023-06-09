import request from "superagent";
import SpotifyWebApi from "spotify-web-api-node";

// Credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: "fcecfc72172e4cd267473117a17cbd4d",
  clientSecret: "a6338157c9bb5ac9c71924cb2940e1a7",
  redirectUri: "http://localhost:3000/callback", // Replace with your actual redirect URI
});

export const getTokenFromResponse = async () => {
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  window.location.hash = "";

  const { code } = hash;

  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token } = data.body;
    return access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    return null;
  }
};

export default spotifyApi;
