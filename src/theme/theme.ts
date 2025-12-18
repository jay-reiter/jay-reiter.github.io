import { extendTheme, PaletteRange } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    secondary: true;
  }

  interface Palette {
    // this will make the node `secondary` configurable in `extendTheme`
    // and add `secondary` to the theme's palette.
    secondary: PaletteRange;
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#0041A5",
          100: "#0041A5",
          200: "#0041A5",
          300: "#0041A5",
          400: "#0041A5",
          500: "#0041A5",
          600: "#0041A5",
          700: "#0041A5",
          800: "#0041A5",
          900: "#0041A5",
          plainColor: "#0041A5",
          plainBg: "#FFF",
          plainHoverBg: "#FAFAFA",
          plainActiveBg: "#F5F5F5",
          plainDisabledColor: "#CFCFCF",
        },
        secondary: {
          50: "#00c382",
          100: "#00c382",
          200: "#00c382",
          300: "#00c382",
          400: "#00c382",
          500: "#00c382",
          600: "#00c382",
          700: "#00c382",
          800: "#00c382",
          900: "#00c382",
          plainColor: "#00c382",
          plainDisabledColor: "#CFCFCF",
          plainHoverBg: "#FFF",
          plainActiveBg: "#FFF",
        },
      },
    },
  },
  fontFamily: {
    display: "Roboto Serif",
    body: "Atkinson Hyperlegible Next",
  },
});

export default theme;
