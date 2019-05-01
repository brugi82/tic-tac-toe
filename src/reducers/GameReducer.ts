import GameState from "./GameState";
import { create2DArray } from "../util/create2DArray";
import { GameActionTypes, MOVE_PLAYED } from './../components/actions/GameActionTypes';
import uuidv4 from 'uuid';

const initialState: GameState = {
    id: uuidv4(),
    x: '',
    o: '',
    board: create2DArray(3)
}

export default function gameReducer(state = initialState, action: GameActionTypes): GameState {
    console.log('Reducer trigg');
    switch (action.type) {
        case MOVE_PLAYED:
            const newBoardState = state.board.map(row => row.slice());
            newBoardState[action.rowIndex][action.columnIndex] = action.player;
            return {
                ...state,
                board: newBoardState
            }
        default:
            return state;
    }
}
