import { getEmptyBoard } from '../../games/ChessGame'

/**
 * function to determine available moves of a given piece
 * @param piece type of piece to move
 * @param color color of piece (black or white)
 * @param x x position of piece on board
 * @param y y position of piece of board
 * @param boardState current state of game board (positions of other pieces)
 */
export function determineMoves(piece: string, color: string, x: number, y: number, boardState: string[][]) {

    let boardSelector = getEmptyBoard();
    switch(piece) {
        case "bishop":
            boardSelector = getBishopMoves(color, x, y, boardState);
            break;
        case "king":
            boardSelector = getKingMoves(color, x, y, boardState);
            break;
        case "knight":
            boardSelector = getKnightMoves(color, x, y, boardState);
            break;
        case "pawn":
            boardSelector = getPawnMoves(color, x, y, boardState);
            break;
        case "queen":
            boardSelector = getQueenMoves(color, x, y, boardState);
            break;
        case "rook":
            boardSelector = getRookMoves(color, x, y, boardState);
            break;
    }

    // mark current tile as selected
    boardSelector[x][y] = "_selected";

    return boardSelector;
}

function getPawnMoves(color: string, x: number, y: number, boardState: string[][]) {
    // black pawns move downwards, white pawns move up
    let multiplier = color === "white" ? -1 : 1;

    let boardSelector = getEmptyBoard();

    // pawn forwards moves
    if (boardState[x][y + multiplier] === "") {
        // there is an empty tile ahead
        boardSelector[x][y + multiplier] = "_option";

        // if this is the pawn's first move, it has the option of moving two tiles
        if ((color === "white" && y === 6) || (color === "black" && y === 1)) {
            if (boardState[x][y + (multiplier * 2)] === "") {
                boardSelector[x][y + (multiplier * 2)] = "_option";
            }
        }
    }

    // pawn left capture
    if (x-1 >= 0 && boardState[x-1][y+multiplier] && boardState[x-1][y+multiplier][0] !== color[0]) {
        boardSelector[x-1][y+multiplier] = "_capture";
    }
    // pawn right capture
    if (x+1 < 8 && boardState[x+1][y+multiplier] && boardState[x+1][y+multiplier][0] !== color[0]) {
        boardSelector[x+1][y+multiplier] = "_capture";
    }

    return boardSelector;
}

function getKnightMoves(color: string, x: number, y: number, boardState: string[][]) {
    let boardSelector = getEmptyBoard();

    const possibleMoves = [
        [-2,-1], [-2,1], [-1, -2], [-1,2],
        [1, -2], [1,2], [2,-1], [2,1]
    ];

    for (let [xshift, yshift] of possibleMoves) {
        let ynew = y + yshift
        let xnew = x + xshift
        // first make sure this is a tile within the board
        if (ynew >= 0 && ynew < 8 && xnew >= 0 && xnew < 8) {
            // check if the square is empty
            if (boardState[xnew][ynew] === "") {
                boardSelector[xnew][ynew] = "_option";
            }
            else if (boardState[xnew][ynew][0] !== color[0]) {
                boardSelector[xnew][ynew] = "_capture";
            }
        }
    }

    return boardSelector;
}

/**
 * 
 * @param color 
 * @param x 
 * @param y 
 * @param boardState 
 * @param boardSelector 
 * @param vector should be a 2-vector, integer multiples of which will determine possible moves
 * @param limit maximum number of tiles to move in any direction (-1 to ignore)
 * @returns adds all the move along the passed vector to the boardSelector
 */
function addMovesAlongVector(color: string, x: number, y: number, boardState: string[][], boardSelector: string[][], vector: number[], limit: number) {
    let targetTile = [x,y];
    let i = 0;
    while (limit === -1 || limit > i) {
        targetTile[0] += vector[0];
        targetTile[1] += vector[1];
        i++;

        // make sure new target is in range
        if (targetTile[0] < 0 || targetTile[0] >= 8 || targetTile[1] < 0 || targetTile[1] >= 8) break;
        // check if the tile is open
        if (boardState[targetTile[0]][targetTile[1]] === "") {
            boardSelector[targetTile[0]][targetTile[1]] = "_option";
        }
        else if (boardState[targetTile[0]][targetTile[1]][0] !== color[0]) {
            boardSelector[targetTile[0]][targetTile[1]] = "_capture";
            break;
        }
        else {
            break;
        }
    }
    return boardSelector;
}

function getRookMoves(color: string, x: number, y: number, boardState: string[][]) {
    let boardSelector = getEmptyBoard();

    let vectors = [
        [1,0], [-1,0], [0,1], [0,-1]
    ];

    for (let vector of vectors) {
        boardSelector = addMovesAlongVector(color, x, y, boardState, boardSelector, vector, -1);
    }

    return boardSelector;
}

function getBishopMoves(color: string, x: number, y: number, boardState: string[][]) {
    let boardSelector = getEmptyBoard();

    let vectors = [
        [1,1], [-1,1], [1,-1], [-1,-1]
    ];

    for (let vector of vectors) {
        boardSelector = addMovesAlongVector(color, x, y, boardState, boardSelector, vector, -1);
    }

    return boardSelector;
}

function getQueenMoves(color: string, x: number, y: number, boardState: string[][]) {
    let boardSelector = getEmptyBoard();

    let vectors = [
        [1,1], [-1,1], [1,-1], [-1,-1],
        [1,0], [-1,0], [0,1], [0,-1]
    ];

    for (let vector of vectors) {
        boardSelector = addMovesAlongVector(color, x, y, boardState, boardSelector, vector, -1);
    }

    return boardSelector;
}

function getKingMoves(color: string, x: number, y: number, boardState: string[][]) {
    let boardSelector = getEmptyBoard();

    let vectors = [
        [1,1], [-1,1], [1,-1], [-1,-1],
        [1,0], [-1,0], [0,1], [0,-1]
    ];

    for (let vector of vectors) {
        boardSelector = addMovesAlongVector(color, x, y, boardState, boardSelector, vector, 1);
    }

    return boardSelector;
}