import React from 'react';
import { calculateGameResult } from '../../util/calculateGameResult';

describe('calculateGameResult', () => {

    it('Should mark player as winner when move connected row.', () => {
        const board = [[], [], ['X', 'X', 'X']];

        const result = calculateGameResult('X', 2, 0, 3, board);

        expect(result.score).toBe('X');
    });

    it('Should mark player as winner when move connected column.', () => {
        const board = [['X'], ['X'], ['X']];

        const result = calculateGameResult('X', 0, 0, 3, board);

        expect(result.score).toBe('X');
    });

    it('Should mark player as winner when move connected diagonal.', () => {
        const board = [['X'], [null, 'X', null], [null, null, 'X']];

        const result = calculateGameResult('X', 0, 0, 3, board);

        expect(result.score).toBe('X');
    });

    it('Should mark player as winner when move connected reverse diagonal.', () => {
        const board = [[null, null, 'X'], [null, 'X', null], ['X']];

        const result = calculateGameResult('X', 2, 0, 3, board);

        expect(result.score).toBe('X');
    });

    it('Should mark TIE when no spaces left on the board and no winner.', () => {
        const board = [['O', 'O', 'X'], ['X', 'X', 'O'], ['O', 'X', 'X']];

        const result = calculateGameResult('X', 0, 2, 8, board);

        expect(result.score).toBe('TIE');
    });
});