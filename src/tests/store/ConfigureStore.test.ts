import React from 'react';
import ConfigureStore from '../../store/ConfigureStore';

describe('ConfigureStore', () => {
    it('Should create new store.', () => {
        const store = ConfigureStore(undefined);

        expect(store).not.toBeNull();
    });
})