import { createTheme } from "@mui/material";
import "@fontsource/atkinson-hyperlegible-next";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: "atkinson-hyperlegible-next",
  },
});

export default theme;
