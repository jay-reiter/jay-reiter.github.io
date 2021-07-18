import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import TitleBar from "./TitleBar";
import { Box, CssBaseline, ThemeProvider, useTheme } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";
import theme from "./theme/theme";
import ReactDOM from "react-dom";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <TitleBar />
          <Switch>
            <Route exact path="/">
              Hooome
            </Route>
            <Route exact path="/code-projects/padic-visualization">
              padic viz
            </Route>
            <Route exact path="/games/tic-tac-toe">
              tictactoe
            </Route>
            <Route exact path="/games/chess">
              chess
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
