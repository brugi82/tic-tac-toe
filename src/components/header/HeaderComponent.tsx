import React from 'react';
import { Layout } from 'antd';
import NavMenu from './NavMenu';

const { Header } = Layout;

const HeaderComponent: React.FunctionComponent<{}> = () => {
    return(
        <Header>
            <div className="logo x-768" />
            <NavMenu />
        </Header>
    );
};

export default HeaderComponent;