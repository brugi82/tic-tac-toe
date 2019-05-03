import React from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { newGame } from '../actions/GameActions';
import { connect } from 'react-redux';
import { AppState } from '../../reducers/RootReducer';

type navMenuProps = {
    newGame: typeof newGame
}

const NavMenu: React.FunctionComponent<navMenuProps> = ({newGame}) => {
    const onNewGameClick = () => {
        newGame();
    }

    return (
        <div>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[window.location.pathname]}
                className="nav-menu">
                <Menu.Item key="/">
                    <Link to="/">
                        <Icon type='home' className="mobile-icon"/>
                        <span className="x-768">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/history">
                    <Link to="/history">
                        <Icon type='bar-chart' className="mobile-icon"/>
                        <span className="x-768">History</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/new" onClick={() => onNewGameClick()}>
                    <Icon type='trophy' className="mobile-icon"/>
                    <span className="x-768">New Game</span>
                </Menu.Item>
            </Menu>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    
});

const dispatchProps = {
    newGame
}

export default withRouter(connect(mapStateToProps, dispatchProps)(NavMenu) as any);