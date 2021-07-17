import React, { FC, useState } from 'react';
import './TicTacToeGame.css';

interface TileProps {
  index: number,
  symbol: string,
  changeSymbol: any,
}

const BoardTile: FC<TileProps> = (props): JSX.Element => (
  <button className="Board-tile" onClick={props.symbol ? null : props.changeSymbol}>
    {props.symbol}
  </button>
);

// completes current players turn and returns their symbol
function playerMove(currentPlayer: number, setCurrentPlayer: any) {
  let ret = getCurrentPlayerChar(currentPlayer);
  setCurrentPlayer((currentPlayer + 1) % 2);
  return ret;
}

// changes the symbol displayed in a tile
function updateTile(tileNum: number, currentPlayer: number, setCurrentPlayer: any, boardState: any, setBoardState: any, setHasWinner: any) {
  let newSymbol = playerMove(currentPlayer, setCurrentPlayer);
  boardState[tileNum] = newSymbol;
  setBoardState([...boardState]);

  if (checkWin(newSymbol, boardState)) {
    setHasWinner(newSymbol + " Wins!");
  }
  if (checkDraw(boardState)) {
    setHasWinner("It's a draw!");
  }

}

// resets the game to its initial state
function resetGame(setBoardState: any, setCurrentPlayer: any, setHasWinner: any) {
  setBoardState(Array(9).fill(""));
  setCurrentPlayer(0);
  setHasWinner("");
}

// returns the appropriate character for the current player
const getCurrentPlayerChar = (currentPlayer: number) => (
  (currentPlayer === 0) ? "O" : "X"
);

// checks if the passed player wins in the current board state
function checkWin(player: string, boardState: string[]) {
  // check rows
  for (let i of [0, 3, 6]) {
    if (boardState[i] === player && boardState[i+1] === player && boardState[i+2] === player) {
      return true;
    }
  }

  // check columns
  for (let i of [0, 1, 2]) {
    if (boardState[i] === player && boardState[i+3] === player && boardState[i+6] === player) {
      return true;
    }
  }

  // check diagonals
  if (boardState[0] === player && boardState[4] === player && boardState[8] === player) {
    return true;
  }
  if (boardState[2] === player && boardState[4] === player && boardState[6] === player) {
    return true;
  }

  return false;
}

// checks if there is a draw--assumes there is no current win
function checkDraw(boardState: string[]) {
  return !boardState.includes("");
}

function TicTacToeGame() {

  const [boardState, setBoardState] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winMessage, setWinMessage] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Welcome to Jay's Tic-Tac-Toe Game</h1>

      </header>
      <body className="App-body">
        <div className="TicTacToeBoard">
            {utils.range(0,8).map(n =>(
              <BoardTile 
                index={n}
                symbol={boardState[n]}
                changeSymbol={
                  () => updateTile(n, currentPlayer, setCurrentPlayer, boardState, setBoardState, setWinMessage)
                }
              />
            ))}
          </div>

          <div>
              <h2>
                { winMessage
                  ? <>{winMessage}</>
                  : <>Current Player: {getCurrentPlayerChar(currentPlayer)}</>
                }
              </h2>
          </div>

          <button onClick={() => resetGame(setBoardState, setCurrentPlayer, setWinMessage)}>
            Reset
          </button>
      </body>
    </div>
  );
}

// elementary computation stuff
const utils = {
  // get an array that has numbers min to max (inclusive)
  range: (min: number, max: number) => Array.from({length: max - min + 1}, (_, i) => min + i),
}

export default TicTacToeGame;
