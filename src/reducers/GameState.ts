import { GameResult } from './../util/calculateGameResult';

export interface PlayerMove {
    moveIndex: number,
    player: string,
    board: any[]
}

export default interface GameState {
    id: string,
    x: string,
    o: string,
    moveCount: number,
    currentTurn: string,
    board: any[],
    gameResult: GameResult,
    moveHistory: PlayerMove[]
}

