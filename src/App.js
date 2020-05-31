import React from "react";
import { Typography, Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h3">this is for header</Typography>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}></Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
