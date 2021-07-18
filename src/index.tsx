import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import TitleBar from "./TitleBar";
import { Box, CssBaseline, ThemeProvider, useTheme } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";
import theme from "./theme/theme";
import ReactDOM from "react-dom";

import "./index.css";

// const Index = () => {
//   const theme = useTheme();
//   return (
//     <>
//       <TitleBar />
//       <p>Hello How are you</p>
//     </>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <TitleBar />
          <p>Hello How are you</p>
          <Switch>
            <Route path="/">{/* <Home /> */}Home</Route>

            <Route path="/PadicVisualization">padic</Route>

            <Route path="/TicTacToe">tictactoe </Route>
            <Route path="/Chess">chess </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
