import { Box, Button, Typography } from "@material-ui/core";
import React, { FC, useState } from "react";

interface TileProps {
  index: number;
  symbol: string;
  changeSymbol: any;
}

const BoardTile: FC<TileProps> = (props): JSX.Element => (
  <Box
    style={{
      width: "80px",
      height: "80px",
      margin: "4px",
      backgroundColor: "#e1e1e1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
    }}
    onClick={props.symbol ? null : props.changeSymbol}
  >
    <Typography variant="h2">{props.symbol}</Typography>
  </Box>
);

// completes current players turn and returns their symbol
function playerMove(currentPlayer: number, setCurrentPlayer: any) {
  let ret = getCurrentPlayerChar(currentPlayer);
  setCurrentPlayer((currentPlayer + 1) % 2);
  return ret;
}

// changes the symbol displayed in a tile
function updateTile(
  tileNum: number,
  currentPlayer: number,
  setCurrentPlayer: any,
  boardState: any,
  setBoardState: any,
  setHasWinner: any
) {
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
function resetGame(
  setBoardState: any,
  setCurrentPlayer: any,
  setHasWinner: any
) {
  setBoardState(Array(9).fill(""));
  setCurrentPlayer(0);
  setHasWinner("");
}

// returns the appropriate character for the current player
const getCurrentPlayerChar = (currentPlayer: number) =>
  currentPlayer === 0 ? "O" : "X";

// checks if the passed player wins in the current board state
function checkWin(player: string, boardState: string[]) {
  // check rows
  for (let i of [0, 3, 6]) {
    if (
      boardState[i] === player &&
      boardState[i + 1] === player &&
      boardState[i + 2] === player
    ) {
      return true;
    }
  }

  // check columns
  for (let i of [0, 1, 2]) {
    if (
      boardState[i] === player &&
      boardState[i + 3] === player &&
      boardState[i + 6] === player
    ) {
      return true;
    }
  }

  // check diagonals
  if (
    boardState[0] === player &&
    boardState[4] === player &&
    boardState[8] === player
  ) {
    return true;
  }
  if (
    boardState[2] === player &&
    boardState[4] === player &&
    boardState[6] === player
  ) {
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
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "264px",
          height: "264px",
        }}
      >
        {utils.range(0, 8).map((n) => (
          <BoardTile
            index={n}
            symbol={boardState[n]}
            changeSymbol={() =>
              updateTile(
                n,
                currentPlayer,
                setCurrentPlayer,
                boardState,
                setBoardState,
                setWinMessage
              )
            }
          />
        ))}
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Box my={4}>
          <Typography variant="h5">
            {winMessage ? (
              <>{winMessage}</>
            ) : (
              <>Current Player: {getCurrentPlayerChar(currentPlayer)}</>
            )}
          </Typography>
        </Box>

        <Button
          variant="outlined"
          onClick={() =>
            resetGame(setBoardState, setCurrentPlayer, setWinMessage)
          }
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}

// elementary computation stuff
const utils = {
  // get an array that has numbers min to max (inclusive)
  range: (min: number, max: number) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i),
};

export default TicTacToeGame;
