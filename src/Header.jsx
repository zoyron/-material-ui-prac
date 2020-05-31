import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";

const useStyles = makeStyles({
  root: {
    marginBottom: "2em",
  },
  typoGraphyStyles: {
    flex: 1,
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="caption" className={classes.typoGraphyStyles}>
          Sagar Arora
        </Typography>
        <PersonRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
