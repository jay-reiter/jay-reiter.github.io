import React from "react";
import ReactDOM from "react-dom/client";

import "./style-sheets/index.css";
import { CssVarsProvider } from "@mui/joy/styles";

import theme from "./theme/theme";
import { CssBaseline } from "@mui/joy";
import CustomRouter from "./components/CustomRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <CustomRouter />
    </CssVarsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
