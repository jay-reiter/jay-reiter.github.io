import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TitleBar from './TitleBar'
import TicTacToeGame from './games/TicTacToeGame';
import ChessGame from './games/ChessGame';
import NavigationBar from './NavigationBar';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router,
         Switch,
         Route, 
         Link, } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme/theme'

import PadicVisualization from './PadicVisualization';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>

          {/* Wrapper for all the content: */}
          <div style={{display: "flex", flexDirection:"column"}}>
            <TitleBar />
            <NavigationBar />
            
          </div>

            <Switch>

              <Route path="/">
                <Home />
              </Route>
              
              <Route path="/PadicVisualization">
                <PadicVisualization />
              </Route>

              <Route path="/TicTacToe">
                <TicTacToeGame />
              </Route>
              <Route path="/Chess">
                <ChessGame />
              </Route>

            </Switch>  
        </Router>

      </ThemeProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

function Home() {
  return (
    <p>Welcome!!!!</p>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
