import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import custsomTheme from "./custsomTheme";

ReactDOM.render(
  <ThemeProvider theme={custsomTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
