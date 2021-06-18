import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TitleBar from './TitleBar'
import TicTacToeGame from './TicTacToeGame';
import ChessGame from './ChessGame';
import NavigationBar from './NavigationBar';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router,
         Switch,
         Route, 
         Link, } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <Router>

        {/* Wrapper for all the content: */}
        <div style={{display: "flex", flexDirection:"column"}}>
          <TitleBar />
          <NavigationBar />
          
        </div>

        <Switch>
          <Route path="/TicTacToe">
            <TicTacToeGame />
          </Route>
          <Route path="/Chess">
            <ChessGame />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

function Home() {
  return (
    <>Welcome!</>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
