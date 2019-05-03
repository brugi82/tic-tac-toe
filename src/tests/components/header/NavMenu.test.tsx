import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavMenu } from '../../../components/header/NavMenu';
import { newGame } from '../../../components/actions/GameActions';
import { Menu } from 'antd';

configure({ adapter: new Adapter() });

describe('NavMenu', () => {
    it('Should render without crashing.', () => {
        const component: ShallowWrapper = shallow( 
            <NavMenu newGame={() => newGame()}/>
          );
    });

    it('Should have Menu.', () => {
        const component: ShallowWrapper = shallow( 
            <NavMenu newGame={() => newGame()}/>
          );
        
        expect(component.find(Menu)).toHaveLength(1);
    });

    it('Should have 3 Menu Items.', () => {
        const component: ShallowWrapper = shallow( 
            <NavMenu newGame={() => newGame()}/>
          );
        
        expect(component.find(Menu.Item)).toHaveLength(3);
    });
});