import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GameField } from '../../../components/game/GameField';
import { Button } from 'antd';

configure({ adapter: new Adapter() });

describe('GameField', () => {
    it('Should render without crashing.', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GameField gameScore='NONE' winningFields={[]} value='' rowIndex={0} columnIndex={0} onClick={() => {}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should be disabled when has value.', () => {
        const component: ShallowWrapper = shallow( 
            <GameField gameScore='NONE' winningFields={[]} value='X' rowIndex={0} columnIndex={0} onClick={() => {}}/>
          );

        expect(component.find(Button).first().props()["disabled"]).toBe(true);
    });

    it('Should be disabled when game ended.', () => {
        const component: ShallowWrapper = shallow( 
            <GameField gameScore='X' winningFields={[]} value='' rowIndex={0} columnIndex={0} onClick={() => {}}/>
          );

        expect(component.find(Button).first().props()["disabled"]).toBe(true);
    });

    it('Should be enabled when no value and game is in progress.', () => {
        const component: ShallowWrapper = shallow( 
            <GameField gameScore='NONE' winningFields={[]} value='' rowIndex={0} columnIndex={0} onClick={() => {}}/>
          );

        expect(component.find(Button).first().props()["disabled"]).toBe(false);
    });

    it('Should have field-winning-button class when it is part of winning sequence.', () => {
        const component: ShallowWrapper = shallow( 
            <GameField gameScore='X' winningFields={[[0,0], [0,1], [0,2]]} value='' rowIndex={0} columnIndex={0} onClick={() => {}}/>
          );

        expect(component.find('.field-winning-button')).toHaveLength(1);
    });
})