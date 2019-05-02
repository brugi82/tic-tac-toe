import { GameResult } from '../util/calculateWinner';

export default interface GameState {
    id: string,
    x: string,
    o: string,
    moveCount: number,
    currentTurn: string,
    board: any[],
    gameResult: GameResult
}