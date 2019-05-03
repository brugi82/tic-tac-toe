export const X = 'X';
export const O = 'O';
export const TIE = 'TIE';
export const NONE = 'NONE';

export type GameScore = typeof X | typeof O | typeof TIE | typeof NONE;

export type GameResult = {
    score: GameScore,
    position: any[]
}

export function calculateGameResult(player: string, lastMoveRowIndex: number, lastMoveColumnIndex: number, moveCount: number, board: any[]): GameResult {
    const dimension = 3;
    let winningPosition = [];
    //Check row
    for (let columnIndex = 0; columnIndex < dimension; columnIndex++) {
        if (board[lastMoveRowIndex][columnIndex] !== player) {
            break;
        }
        winningPosition.push([lastMoveRowIndex, columnIndex]);
        if (columnIndex === dimension - 1) {
            return {
                score: player as GameScore,
                position: winningPosition
            }
        }
    }

    //Check column
    winningPosition = [];
    for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
        if (board[rowIndex][lastMoveColumnIndex] !== player) {
            break;
        }
        winningPosition.push([rowIndex, lastMoveColumnIndex]);
        if (rowIndex === dimension - 1) {
            return {
                score: player as GameScore,
                position: winningPosition
            }
        }
    }

    //Check diagonal
    winningPosition = [];
    if (lastMoveRowIndex === lastMoveColumnIndex) {
        for (let index = 0; index < dimension; index++) {
            if (board[index][index] !== player) {
                break;
            }
            winningPosition.push([index, index]);
            if (index === dimension - 1) {
                return {
                    score: player as GameScore,
                    position: winningPosition
                }
            }
        }
    }

    //Check reverse diagonal
    winningPosition = [];
    if (lastMoveRowIndex + lastMoveColumnIndex === dimension - 1) {
        for (let index = 0; index < dimension; index++) {
            if (board[index][dimension-index-1] !== player) {
                break;
            }
            winningPosition.push([index, dimension-index-1]);
            if (index === dimension - 1) {
                return {
                    score: player as GameScore,
                    position: winningPosition
                }
            }
        }
    }

    //Check for tie
    if (moveCount === (Math.pow(dimension, 2) - 1)) {
        return {
            score: TIE,
            position: []
        }
    }

    return {
        score: NONE,
        position: []
    }
}