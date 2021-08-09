import React, { FC, useState } from "react";
import "./ChessGame.css";
import pieces from "../assets/chess_assets/chess_images";
import { determineMoves } from "../assets/chess_assets/determineMoves";
import Timer from "../assets/chess_assets/chessTimer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import allActions from "../actions/actionsIndex";
import { Box, Button, Typography } from "@material-ui/core";

const BLACK_TILE_COLOR = "darkred";
const WHITE_TILE_COLOR = "oldlace";
const GAME_DURATION = 15;

// global vars for keeping track of selected tile
let selected_x = -1;
let selected_y = -1;

interface TileProps {
  x: number;
  y: number;
  gamePiece: string;
  changeSymbol: any;

  currentPlayer: any;
  setCurrentPlayer: any;

  boardState: any;
  setBoardState: any;
  boardSelector: any;
  setBoardSelector: any;
}

/**
 * helper function to make sure clicking on the current square makes sense
 * @param props contains all the info for the current square
 * @returns true if the current player matches the color of the piece on the square false if square is empty or, for example, white player clicks black piece
 */
function validateCurrentPlayerClick(props: any) {
  if (props.gamePiece && props.gamePiece[0] == props.currentPlayer[0]) {
    return true;
  }
  return false;
}

function getNextPlayer(currentPlayer: string) {
  return currentPlayer === "white" ? "black" : "white";
}

function handleSquareClick(props: any) {
  // if the square is an option to move to
  if (
    props.boardSelector[props.x][props.y] === "_option" ||
    props.boardSelector[props.x][props.y] === "_capture"
  ) {
    props.boardState[props.x][props.y] =
      props.boardState[selected_x][selected_y];
    props.boardState[selected_x][selected_y] = "";

    props.setBoardState(props.boardState);
    props.setBoardSelector(getEmptyBoard());
    props.setCurrentPlayer(getNextPlayer(props.currentPlayer));

    return;
  }

  // otherwise, check if it makes sense for the current player to click on this square
  if (!validateCurrentPlayerClick(props)) return;

  // otherwise, this is an unselected game piece; select it and display moves
  if (props.boardSelector[props.x][props.y] !== "_selected") {
    // clear board selector and mark current tile as selected
    let boardSelector = getEmptyBoard();

    let piece = props.gamePiece.substring(2);
    let color = props.gamePiece[0] == "w" ? "white" : "black";
    boardSelector = determineMoves(
      piece,
      color,
      props.x,
      props.y,
      props.boardState
    );

    // update the board selector
    props.setBoardSelector(boardSelector);

    selected_x = props.x;
    selected_y = props.y;
    return;
  }
}

function getTileClass(props: any) {
  return "BoardTile" + props.boardSelector[props.x][props.y];
}

const BoardTile: FC<TileProps> = (props): JSX.Element => (
  // get appropriate class name for the tile
  <button
    className={getTileClass(props)}
    style={{
      backgroundColor:
        (props.x + props.y) % 2 ? BLACK_TILE_COLOR : WHITE_TILE_COLOR,
    }}
    onClick={() => handleSquareClick(props)}
  >
    {/* display game piece on tile */}
    {props.gamePiece ? (
      <img src={pieces.get(props.gamePiece)} alt={""} className='Piece' />
    ) : null}
  </button>
);

/**
 * Function to generate the starting board in chess
 * @returns an 8x8 array of strings where each square has an appropriate piece name
 */
function getStartingBoard() {
  // get an empty board
  let board = getEmptyBoard();

  let pieceOrder = [
    "rook",
    "knight",
    "bishop",
    "queen",
    "king",
    "bishop",
    "knight",
    "rook",
  ];

  // black pieces
  for (let i = 0; i < 8; i++) {
    board[i][0] = `b_${pieceOrder[i]}`;
  }
  // black pawns
  for (let i = 0; i < 8; i++) {
    board[i][1] = `b_pawn`;
  }
  // white pieces
  for (let i = 0; i < 8; i++) {
    board[i][7] = `w_${pieceOrder[i]}`;
  }
  // white pawns
  for (let i = 0; i < 8; i++) {
    board[i][6] = `w_pawn`;
  }

  return board;
}

export const getEmptyBoard = function (): string[][] {
  let ret: Array<Array<string>> = Array.from(Array(8), (_) =>
    Array(8).fill("")
  );
  return ret;
};

function ChessGame() {
  const [boardState, setBoardState] = useState(getStartingBoard());
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const [boardSelector, setBoardSelector] = useState(getEmptyBoard());

  const state = useSelector((state: RootState) => state.chessReducer);
  const dispatch = useDispatch();

  // reset the game board
  if (state.resetting && !state.board_reset) {
    setBoardState(getStartingBoard());
    setCurrentPlayer("white");
    setBoardSelector(getEmptyBoard());

    // indicate that the board has just been reset
    dispatch(allActions.chessActions.reset("board"));
  }

  return (
    <>
      <Typography>Play Chess (WIP)</Typography>
      <Box m={8}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className='ChessBoard'>
            {utils.range(0, 63).map((n) => (
              <BoardTile
                x={n % 8}
                y={(n - (n % 8)) / 8}
                gamePiece={boardState[n % 8][(n - (n % 8)) / 8]}
                changeSymbol={() => null}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                boardState={boardState}
                setBoardState={setBoardState}
                boardSelector={boardSelector}
                setBoardSelector={setBoardSelector}
              />
            ))}
          </div>

          <div className='SideBar'>
            <Typography variant='h5'>
              {currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}
              's Turn
            </Typography>
            <div className='TimerBox'>
              <div className='Timer'>
                <Typography>White:</Typography>
                <Timer
                  startMinutes={GAME_DURATION}
                  startSeconds={0}
                  run={currentPlayer === "white"}
                />
              </div>
              <div className='Timer'>
                <Typography>Black:</Typography>
                <Timer
                  startMinutes={GAME_DURATION}
                  startSeconds={0}
                  run={currentPlayer === "black"}
                />
              </div>
            </div>
            <Button
              variant='outlined'
              onClick={() => dispatch(allActions.chessActions.reset("reset"))}
            >
              Reset Game
            </Button>
          </div>
        </Box>
      </Box>
    </>
  );
}

// elementary computation stuff
const utils = {
  // get an array that has numbers min to max (inclusive)
  range: (min: number, max: number) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i),
};

export default ChessGame;
