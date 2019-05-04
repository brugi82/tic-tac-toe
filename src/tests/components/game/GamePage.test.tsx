import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GamePage } from '../../../components/game/GamePage';
import { Row, Col } from 'antd';
import { Player } from '../../../components/player/Player';
import { create2DArray } from '../../../util/create2DArray';

configure({ adapter: new Adapter() });

describe('GamePage', () => {
    it('Should Render without crashing.', () => {
        const component: ShallowWrapper = shallow( 
            <GamePage x='Pl1' o='Pl2' board={create2DArray(3)} currentTurn='X' gameResult='NONE'/>
          );
    });

    it('Should have one Row.', () => {
        const component: ShallowWrapper = shallow( 
            <GamePage x='Pl1' o='Pl2' board={create2DArray(3)} currentTurn='X' gameResult='NONE'/>
          );

        expect(component.find(Row)).toHaveLength(1);
    });

    it('Should have 3 Columns.', () => {
        const component: ShallowWrapper = shallow( 
            <GamePage x='Pl1' o='Pl2' board={create2DArray(3)} currentTurn='X' gameResult='NONE'/>
          );

        expect(component.find(Col)).toHaveLength(3);
    });
});