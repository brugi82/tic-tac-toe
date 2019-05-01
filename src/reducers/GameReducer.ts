import GameState from "./GameState";
import { create2DArray } from "../util/create2DArray";
import uuidv4 from 'uuid';

const initialState: GameState = {
    id: uuidv4(),
    x: '',
    o: '',
    board: create2DArray(3)
}

export default function gameReducer(state = initialState, action: any): GameState {
    switch (action.type) {
        default:
            return state;
    }
}
