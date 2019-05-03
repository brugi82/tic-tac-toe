import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Player } from '../../../components/player/Player';
import { Avatar } from 'antd';

configure({ adapter: new Adapter() });

describe('Player', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player name='test' symbol='X' currentTurn='O' gameScore='NONE'/>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('Renders symbol in Avatar when name is given.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name='test' symbol='X' currentTurn='O' gameScore='NONE'/>
      );

      const avatar = component.find(Avatar);
      expect(avatar.render().text()).toEqual('X');
    });

    it('Renders name in h1 when given.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name='test' symbol='X' currentTurn='O' gameScore='NONE'/>
      );

      expect(component.find('h1').text()).toEqual('test');
    });

    it('Renders with player-active class name when player is active.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name='test' symbol='X' currentTurn='X' gameScore='NONE'/>
      );

      expect(component.find('.player-active')).toHaveLength(1);
    });

    it('Renders with player-winner class name when player is winner.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name='test' symbol='X' currentTurn='' gameScore='X'/>
      );

      expect(component.find('.player-winner')).toHaveLength(1);
    });

    it('Renders with player-tie class name when player is winner.', () => {
      const component: ShallowWrapper = shallow( 
        <Player name='test' symbol='X' currentTurn='' gameScore='TIE'/>
      );

      expect(component.find('.player-tie')).toHaveLength(1);
    });
});