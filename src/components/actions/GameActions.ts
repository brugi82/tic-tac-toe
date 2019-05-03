import { GameActionTypes, MOVE_PLAYED, NEW_GAME } from './GameActionTypes';

export function movePlayed(rowIndex: number, columnIndex: number): GameActionTypes {
    return {
        type: MOVE_PLAYED,
        rowIndex: rowIndex,
        columnIndex: columnIndex,
    }
}

export function newGame(): GameActionTypes {
    return {
        type: NEW_GAME
    }
}
