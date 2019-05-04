import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HistoryPage } from '../../../components/history/HistoryPage';
import { create2DArray } from '../../../util/create2DArray';
import { Row, Col } from 'antd';

configure({ adapter: new Adapter() });

describe('HistoryPage', () => {
    it('Should render without crashing.', () => {
        const component: ShallowWrapper = shallow( 
            <HistoryPage playerMoves={[]} />
          );
    });

    it('Should have row.', () => {
        const component: ShallowWrapper = shallow( 
            <HistoryPage playerMoves={[{moveIndex: 0, board: create2DArray(3), player: 'test'}]} />
          );

        expect(component.find(Row)).toHaveLength(1);
    });

    it('Should have 2 columns.', () => {
        const component: ShallowWrapper = shallow( 
            <HistoryPage playerMoves={[{moveIndex: 0, board: create2DArray(3), player: 'test'}]} />
          );

        expect(component.find(Col)).toHaveLength(2);
    });
});