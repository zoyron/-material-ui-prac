import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
const useStyles = makeStyles({
  testClassStyle: {
    fontStyle: "oblique",
    color: "#0f0a0b",
  },
});

const App = () => {
  const customStyle = useStyles();
  return (
    <div className="App">
      <Typography className={customStyle.testClassStyle} variant="h1">
        Material ui app
      </Typography>
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
