import { AnyAction } from '@reduxjs/toolkit'

interface chessState {
    resetting: boolean,
    clocks_reset: number,
    board_reset: boolean,
}

const defaultChessState: chessState = {
    resetting: false,
    clocks_reset: 0,
    board_reset: false,
}

const chessReducer = (state: chessState = defaultChessState, action: AnyAction) => {
    if (state.resetting) {
        if (action.type === "clock") {
            // the action indicated that a clock has been reset
            state.clocks_reset++;
            console.log("One clock reset")
        }
        else if (action.type === "board") {
            // the action indicated that the board has been reset
            state.board_reset = true;
            console.log("board reset");
        }

        if (state.board_reset && state.clocks_reset === 2) {
            // resetting has been completed
            console.log("reset complete");
            return defaultChessState;
        }
        else {
            // otherwise, we have updated the state to reflect the things that have been reset so far
            return state;
        }
    }
    if (action.type === "reset") {
        return {
            resetting: true,
            clocks_reset: 0,
            board_reset: false,
        } as chessState;
    }

    return defaultChessState;
}

export default chessReducer;