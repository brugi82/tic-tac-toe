import React from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const NavMenu: React.FunctionComponent<{}> = () => {
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
            </Menu>
        </div>
    )
}

export default withRouter(NavMenu);