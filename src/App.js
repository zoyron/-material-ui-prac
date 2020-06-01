import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, red 30%, pink 90%)",
  },
  button: {
    backgroundColor: "#0f0f0f",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: blue,
    },
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button color="primary" variant="contained" className={classes.button}>
        new button
      </Button>
      <Button color="secondary" variant="contained">
        new button
      </Button>
      <Typography>this is my typo graphy</Typography>
    </div>
  );
};

export default App;
