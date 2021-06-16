import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TitleBar from './TitleBar'
import TicTacToeGame from './TicTacToeGame';
import ChessGame from './ChessGame';
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
        
        <TitleBar />

        <div>
          <ul>
            <li>
              <Link to="/index">Home</Link>
            </li>
            <li>
              <Link to="/TicTacToe">Play Tic-Tac-Toe</Link>
            </li>
            <li>
              <Link to="/Chess">Play Chess</Link>
            </li>
          </ul>
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
