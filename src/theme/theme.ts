import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      dark: "#000",
      light: "#ffffff",
      contrastText: "blue",
    },
    secondary: {
      main: "#f0f8ff ",
      light: "#f1f1f1",
      dark: "#e1e1e1",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000",
      secondary: "grey",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
export default theme;
