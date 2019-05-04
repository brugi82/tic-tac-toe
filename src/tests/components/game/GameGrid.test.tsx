import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GameGrid } from '../../../components/game/GameGrid';
import { Row, Col } from 'antd';
import { create2DArray } from '../../../util/create2DArray';
import { movePlayed } from '../../../components/actions/GameActions';

configure({ adapter: new Adapter() });

describe('GameGrid', () => {
    let board: any[] = [];
    beforeEach(() => {
        board = create2DArray(3);
    });

    it('Renders without crashing', () => {
        const component: ShallowWrapper = shallow( 
            <GameGrid board={board} gameScore='NONE' isReadOnly={false} movePlayed={(r, c) => movePlayed(r, c)}/>
        );
      });

    it('Should have 3 rows.', () => {
        const component: ShallowWrapper = shallow( 
            <GameGrid board={board} gameScore='NONE' isReadOnly={false} movePlayed={(r, c) => movePlayed(r, c)}/>
        );

        expect(component.find(Row)).toHaveLength(3);
    });

    it('Should have 9 columns.', () => {
        const component: ShallowWrapper = shallow( 
            <GameGrid board={board} gameScore='NONE' isReadOnly={false} movePlayed={(r, c) => movePlayed(r, c)}/>
        );

        expect(component.find(Col)).toHaveLength(9);
    });

    it('Should have div with game-grid-container class.', () => {
        const component: ShallowWrapper = shallow( 
            <GameGrid board={board} gameScore='NONE' isReadOnly={false} movePlayed={(r, c) => movePlayed(r, c)}/>
        );

        expect(component.find('div.game-grid-container')).toHaveLength(1);
    });
});