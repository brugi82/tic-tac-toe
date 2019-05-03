import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HistoryPage from '../../../components/history/HistoryPage';

configure({ adapter: new Adapter() });

describe('HistoryPage', () => {
    it('Should render without crashing.', () => {
        const component: ShallowWrapper = shallow( 
            <HistoryPage />
          );
    });
});