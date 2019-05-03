export const MOVE_PLAYED = 'MOVE_PLAYED';
export const NEW_GAME = 'NEW_GAME';

interface MovePlayedAction {
    type: typeof MOVE_PLAYED
    rowIndex: number
    columnIndex: number
}

interface NewGameAction {
    type: typeof NEW_GAME
}

export type GameActionTypes = MovePlayedAction | NewGameAction;