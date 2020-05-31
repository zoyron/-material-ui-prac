import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <PersonRoundedIcon />
        <Typography variant="caption">Sagar Arora</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
