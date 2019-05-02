import GameState from "./GameState";
import { create2DArray } from "../util/create2DArray";
import { GameActionTypes, MOVE_PLAYED } from './../components/actions/GameActionTypes';
import uuidv4 from 'uuid';
import { NONE, calculateGameResult } from '../util/calculateWinner';

const initialState: GameState = {
    id: uuidv4(),
    x: 'Milos',
    o: 'Joksa',
    moveCount: 0,
    currentTurn: Math.floor(Math.random() * 2) === 1 ? 'X' : 'O',
    board: create2DArray(3),
    gameResult: {
        score: NONE,
        position: []
    }
}

export default function gameReducer(state = initialState, action: GameActionTypes): GameState {
    console.log('Reducer trigg');
    switch (action.type) {
        case MOVE_PLAYED:
            const newBoardState = state.board.map(row => row.slice());
            newBoardState[action.rowIndex][action.columnIndex] = state.currentTurn;
            const gameResult = calculateGameResult(state.currentTurn, action.rowIndex, action.columnIndex, state.moveCount, newBoardState);
            let currentTurn = '';
            if (gameResult.score === NONE) {
                currentTurn = state.currentTurn === 'X' ? 'O' : 'X'
            } 
            return {
                ...state,
                moveCount: state.moveCount + 1,
                currentTurn: currentTurn,
                board: newBoardState,
                gameResult: {
                    ...state.gameResult,
                    score: gameResult.score,
                    position: gameResult.position
                }
            }
        default:
            return state;
    }
}
