import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";

const useStyles = makeStyles({
  typoGraphyStyles: {
    flex: 1,
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
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
