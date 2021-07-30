import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import TitleBar from "./TitleBar";
import { Box, CssBaseline, ThemeProvider, useTheme } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";
import theme from "./theme/theme";
import ReactDOM from "react-dom";

import ChessGame from "./games/ChessGame";
import TicTacToeGame from "./games/TicTacToeGame";
import "./index.css";

import PadicVisualization from "./code-projects/PadicVisualization";
import BreastfeedingSite from "./code-projects/BreastfeedingSite";
import ThisWebsite from "./code-projects/ThisWebsite";
import OtherStuff from "./code-projects/OtherStuff";
import QCaT from "./research/qcat";
import PadicAH from "./research/PadicAH";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <TitleBar />
          <Switch>
            <Route exact path='/'>
              <></>
            </Route>

            <Route exact path='/code-projects/padic-visualization'>
              <PadicVisualization />
            </Route>
            <Route exact path='/code-projects/breastfeeding-site'>
              <BreastfeedingSite />
            </Route>
            <Route exact path='/code-projects/website'>
              <ThisWebsite />
            </Route>
            <Route exact path='/code-projects/other-stuff'>
              <OtherStuff />
            </Route>

            <Route exact path='/research/qcat'>
              <QCaT />
            </Route>
            <Route exact path='/research/padic-artin-hasse'>
              <PadicAH />
            </Route>

            <Route exact path='/games/tic-tac-toe'>
              <TicTacToeGame />
            </Route>
            <Route exact path='/games/chess'>
              <ChessGame />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
