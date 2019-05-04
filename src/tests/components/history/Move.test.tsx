import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Move from '../../../components/history/Move';
import TimelineItem from 'antd/lib/timeline/TimelineItem';

configure({ adapter: new Adapter() });

describe('Move', () => {
    it('Should render without crashing.', () => {
        const component: ShallowWrapper = shallow( 
            <Move moveIndex={0} player='test' selectTurn={() => jest.fn()}  />
          );
    });

    it('Should render Timeline item.', () => {
        const component: ShallowWrapper = shallow( 
            <Move moveIndex={0} player='test' selectTurn={() => jest.fn()}  />
          );

        expect(component.find(TimelineItem)).toHaveLength(1);
    });
});