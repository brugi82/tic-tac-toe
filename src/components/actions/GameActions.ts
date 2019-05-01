import { GameActionTypes, MOVE_PLAYED } from './GameActionTypes';

export function movePlayed(rowIndex: number, columnIndex: number, player: string): GameActionTypes {
    return {
        type: MOVE_PLAYED,
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        player: player
    }
}
