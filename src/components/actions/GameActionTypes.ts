export const MOVE_PLAYED = 'MOVE_PLAYED';

interface MovePlayedAction {
    type: typeof MOVE_PLAYED
    rowIndex: number
    columnIndex: number
    player: string
}

export type GameActionTypes = MovePlayedAction;