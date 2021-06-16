import { AnyAction } from '@reduxjs/toolkit'

const tictactoeReducer = (state = 0, action: AnyAction) => {
    switch (action.type) {
        case "RESET":
            return state + 1;

        default:
            return state;
    }
}

export default tictactoeReducer;