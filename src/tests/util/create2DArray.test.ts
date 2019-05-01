import React from 'react';
import ReactDOM from 'react-dom';
import { create2DArray } from '../../util/create2DArray';

describe('create2DArray', () => {
    it('Should create 2D array with given length.', () => {
        const arr = create2DArray(3);

        expect(arr[0].length).toBe(3);
        expect(arr[1].length).toBe(3);
        expect(arr[2].length).toBe(3);
    });
});