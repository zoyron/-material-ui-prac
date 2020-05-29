import React from "react";
import { Button } from "@material-ui/core";
import "./styles.css";
const App = () => {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Default contained button
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        disableFocusRippleRipple="true"
      >
        Default outlined button
      </Button>
    </div>
  );
};

export default App;
