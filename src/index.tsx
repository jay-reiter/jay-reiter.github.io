import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./style-sheets/index.css";
import reportWebVitals from "./reportWebVitals";

import HomePage from "./pages/HomePage";
import MathPage from "./pages/MathPage";
import { CssVarsProvider } from "@mui/joy/styles";

import theme from "./theme/theme";
import { CssBaseline } from "@mui/joy";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/math' element={<MathPage />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
