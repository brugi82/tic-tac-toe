import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from '../../../components/player/Player';
import { Avatar } from 'antd';

configure({ adapter: new Adapter() });

describe('Player', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player name="test" isActive={false} isWinner={false}/>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('Renders first capital letter in Avatar when name is given.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name="Test" isActive={false} isWinner={false}/>
      );

      const avatar = component.find(Avatar);
      expect(avatar.render().text()).toEqual('T');
    });

    it('Renders Unknown in Avatar when name is not given.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name="" isActive={false} isWinner={false}/>
      );

      const avatar = component.find(Avatar);
      expect(avatar.render().text()).toEqual('Unknown');
    });

    it('Renders name in h1 when given.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name="Test" isActive={false} isWinner={false}/>
      );

      expect(component.find('h1').text()).toEqual('Test');
    });

    it('Renders with player-active class name when player is active.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name="Test" isActive={true} isWinner={false}/>
      );

      expect(component.find('.player-active')).toHaveLength(1);
    });

    it('Renders with player-winner class name when player is winner.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name="Test" isActive={false} isWinner={true}/>
      );

      expect(component.find('.player-winner')).toHaveLength(1);
    });
});