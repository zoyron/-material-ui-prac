import { createMuiTheme } from "@material-ui/core/styles";
import { pink, brown, grey } from "@material-ui/core/colors";

const custsomTheme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: brown,
  },
  status: {
    danger: pink,
  },
});

export default custsomTheme;
