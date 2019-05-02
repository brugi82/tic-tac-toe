export const MOVE_PLAYED = 'MOVE_PLAYED';

interface MovePlayedAction {
    type: typeof MOVE_PLAYED
    rowIndex: number
    columnIndex: number
}

export type GameActionTypes = MovePlayedAction;