import React, { useState } from "react";
import { Grid, Typography, Slider } from "@material-ui/core";
import { Paper, List, ListItem, ListItemText } from "@material-ui/core";

function Playlist(props) {
  const [playlist, setPlaylist] = useState([]);

  const handleRecommendation = () => {
    props.recommendationCallback();
  };

  const handlePlaylist = (newPlaylist) => {
    setPlaylist(newPlaylist);
  };

  return (
    <Paper>
      <h1>Recommended Playlist</h1>
      <List>
        {playlist.map((track) => (
          <ListItem key={track.id}>
            <img src={track.album.images[2].url} alt={track.album.name} />
            <ListItemText
              primary={track.name}
              secondary={track.artists.map((artist) => artist.name).join(", ")}
            />
          </ListItem>
        ))}
      </List>
      <button onClick={handleRecommendation}>Get New Recommendations</button>
    </Paper>
  );
}

export default Playlist;
