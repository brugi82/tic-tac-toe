import GameState from "./GameState";
import { create2DArray, clone2DArray } from "../util/create2DArray";
import { GameActionTypes, MOVE_PLAYED, NEW_GAME } from './../components/actions/GameActionTypes';
import uuidv4 from 'uuid';
import { NONE, calculateGameResult } from './../util/calculateGameResult';

const initialState: GameState = {
    id: uuidv4(),
    x: 'Player 1',
    o: 'Player 2',
    moveCount: 0,
    currentTurn: Math.floor(Math.random() * 2) === 1 ? 'X' : 'O',
    board: create2DArray(3),
    gameResult: {
        score: NONE,
        position: []
    },
    moveHistory: []
}

export default function gameReducer(state = initialState, action: GameActionTypes): GameState {
    switch (action.type) {
        case MOVE_PLAYED:
            const newBoardState = clone2DArray(state.board);
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
                },
                moveHistory: [...state.moveHistory, {
                    moveIndex: state.moveCount,
                    player: state.currentTurn,
                    board: clone2DArray(newBoardState)
                }]
            }
        case NEW_GAME:
            return {
                ...state,
                moveCount: 0,
                id: uuidv4(),
                currentTurn: Math.floor(Math.random() * 2) === 1 ? 'X' : 'O',
                board: create2DArray(3),
                gameResult: {
                    score: NONE,
                    position: []
                },
                moveHistory: []
            }
        default:
            return state;
    }
}
