import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="caption">This is the header</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
