import React from 'react';
import gameReducer from '../../reducers/GameReducer';
import { newGame, movePlayed } from '../../components/actions/GameActions';

describe('GameReducer', () => {
    it('Should return new game state on NewGameAction.', () => {
        const newGameState = gameReducer(undefined, newGame());

        expect(newGameState.moveCount).toBe(0);
        expect(newGameState.gameResult.score).toBe('NONE');
        expect(newGameState.board.length).toBe(3);
        expect(newGameState.board[0].length).toBe(3);
        expect(newGameState.board[1].length).toBe(3);
        expect(newGameState.board[2].length).toBe(3);
    });

    it('Should return modified state on movePlayed action.', () => {
        const newGameState = gameReducer(undefined, movePlayed(0, 0));

        expect(newGameState.moveCount).toBe(1);
        expect(newGameState.gameResult.score).toBe('NONE');
        expect(newGameState.board.length).toBe(3);
        expect(newGameState.board[0].length).toBe(3);
        expect(newGameState.board[1].length).toBe(3);
        expect(newGameState.board[2].length).toBe(3);
        expect(newGameState.board[0][0]).toBeTruthy();
    });
});