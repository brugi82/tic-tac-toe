import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeaderComponent from '../../../components/header/HeaderComponent';
import { Layout } from 'antd';

configure({ adapter: new Adapter() });

describe('HeaderComponent', () => {
    it('Should render without crashing.', () => {
        const component: ShallowWrapper = shallow( 
            <HeaderComponent />
          );
    });

    it('Should have Header.', () => {
        const component: ShallowWrapper = shallow( 
            <HeaderComponent />
          );
        
        const { Header } = Layout;
        
        expect(component.find(Header)).toHaveLength(1);
    });

    it('Should have div logo.', () => {
        const component: ShallowWrapper = shallow( 
            <HeaderComponent />
          );
        
        expect(component.find('div.logo')).toHaveLength(1);
    });
})