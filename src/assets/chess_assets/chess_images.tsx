import b_bishop_png from './chess_pieces/b_bishop.png';
import b_king_png from './chess_pieces/b_king.png';
import b_knight_png from './chess_pieces/b_knight.png';
import b_pawn_png from './chess_pieces/b_pawn.png';
import b_queen_png from './chess_pieces/b_queen.png';
import b_rook_png from './chess_pieces/b_rook.png';

import w_bishop_png from './chess_pieces/w_bishop.png';
import w_king_png from './chess_pieces/w_king.png';
import w_knight_png from './chess_pieces/w_knight.png';
import w_pawn_png from './chess_pieces/w_pawn.png';
import w_queen_png from './chess_pieces/w_queen.png';
import w_rook_png from './chess_pieces/w_rook.png';

let pieces = new Map();

pieces.set("b_bishop", b_bishop_png);
pieces.set("b_king", b_king_png);
pieces.set("b_knight", b_knight_png);
pieces.set("b_pawn", b_pawn_png);
pieces.set("b_queen", b_queen_png);
pieces.set("b_rook", b_rook_png);

pieces.set("w_bishop", w_bishop_png);
pieces.set("w_king", w_king_png);
pieces.set("w_knight", w_knight_png);
pieces.set("w_pawn", w_pawn_png);
pieces.set("w_queen", w_queen_png);
pieces.set("w_rook", w_rook_png);

// const pieces = {
//     "b_bishop": b_bishop,
//     "b_king": b_king,
//     "b_knight": b_knight,
//     "b_pawn": b_pawn,
//     "b_queen": b_queen,
//     "b_rook": b_rook,

//     "w_bishop": w_bishop,
//     "w_king": w_king,
//     "w_knight": w_knight,
//     "w_pawn": w_pawn,
//     "w_queen": w_queen,
//     "w_rook": w_rook,
// }

export default pieces;