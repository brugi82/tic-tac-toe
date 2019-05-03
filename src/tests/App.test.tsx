import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper } from 'enzyme';
import GamePage from '../components/game/GamePage';
import App from '../App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HistoryPage from '../components/history/HistoryPage';
import NotFoundPage from '../components/common/NotFoundPage';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('Renders without crashing.', () => {
    const component = shallow( 
      <MemoryRouter initialEntries = {['/']} >
        <App/>
      </MemoryRouter>
    );
  });

  // it('Routes to Game component on default route.', () => {
  //   const component = shallow( 
  //     <MemoryRouter initialEntries = {['/']} >
  //       <App/>
  //     </MemoryRouter>
  //   );
  //   expect(component.find(GamePage)).toHaveLength(1);
  // });

  // it('Routes to History component on history route.', () => {
  //   const component = shallow( 
  //     <MemoryRouter initialEntries = {['/history']} >
  //       <App/>
  //     </MemoryRouter>
  //   );
  //   expect(component.find(HistoryPage)).toHaveLength(1);
  // });

  // it('Routes to NotFoundPage component when route not found.', () => {
  //   const component = shallow( 
  //     <MemoryRouter initialEntries = {['/sdfsdf']} >
  //       <App/>
  //     </MemoryRouter>
  //   );
  //   expect(component.find(NotFoundPage)).toHaveLength(1);
  // });
});

