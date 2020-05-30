import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./styles.css";
const App = () => {
  return (
    <div className="App">
      <Typography variant="h1">Material ui app</Typography>
      <Button variant="contained" color="primary">
        Default contained button
      </Button>
      <Button
        variant="outlined"
        color="secondary.dark"
        disableFocusRippleRipple="true"
      >
        Default outlined button
      </Button>
    </div>
  );
};

export default App;
