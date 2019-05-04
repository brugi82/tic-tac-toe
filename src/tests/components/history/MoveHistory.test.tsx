import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MoveHistory } from '../../../components/history/MoveHistory';

configure({ adapter: new Adapter() });

describe('MoveHistory', () => {
    it('Should render without crashing.', () => {
        const component = mount( 
            <MoveHistory moves={[]} selectTurn={(turn) => jest.fn()} />
          );
    });
});