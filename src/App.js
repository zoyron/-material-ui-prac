import React from "react";
import { Typography, Button, createMuiTheme } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";

const App = () => {
  return (
    <div>
      <h1>material ui detailed study</h1>
      <Typography variant="h4" color="textSecondary">
        I like this new font
      </Typography>
      <p>obviously, the new font of vs code, not of the browser</p>
      <Button variant="outlined" startIcon={<PublishIcon />}>
        Upload Files
      </Button>
    </div>
  );
};

export default App;
