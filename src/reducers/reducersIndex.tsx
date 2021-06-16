import { combineReducers } from 'redux'
import chessReducer from './chessReducer'
import tictactoeReducer from './tictactoeReducer'

const rootReducer = combineReducers({
    chessReducer,
    tictactoeReducer,
});

export default rootReducer;