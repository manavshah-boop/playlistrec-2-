import request from "superagent";

var SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: "fcecfc72172e4cd267473117a17cbd4d",
  clientSecret: "a6338157c9bb5ac9c71924cb2940e1a7",
  redirectUri: "www.google.com",
});

export const getTokenFromResponse = () => {
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

  const { access_token } = hash;

  return access_token;
};
