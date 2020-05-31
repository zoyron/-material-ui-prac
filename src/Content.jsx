import React from "react";
import SimpleCard from "./CardComponent";
import { Grid } from "@material-ui/core";

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item sm={4} xs={12}>
        <SimpleCard />
      </Grid>
      <Grid item sm={4} xs={12}>
        <SimpleCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SimpleCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SimpleCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SimpleCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SimpleCard />
      </Grid>
    </Grid>
  );
};

export default Content;
