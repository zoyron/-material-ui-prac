import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, red 30%, pink 90%)",
  },
});
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button color="primary" variant="contained">
        new button
      </Button>
      <Typography>this is my typo graphy</Typography>
    </div>
  );
};

export default App;
