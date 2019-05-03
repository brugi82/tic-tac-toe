import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import GamePage from './components/game/GamePage';
import HistoryPage from './components/history/HistoryPage';
import HeaderComponent from './components/header/HeaderComponent';
import './App.css';
import NotFoundPage from './components/common/NotFoundPage';

const { Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <div>
      <Layout className="layout">
        <HeaderComponent/>
        <Content>
          <Switch>
            <Route exact path="/" component={GamePage}/>
            <Route exact path="/history" component={HistoryPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </Content>
        <Footer className="footer">Tic Tac Toe @2019 Created by Milos Petrovic</Footer>
      </Layout>
    </div>
  );
}

export default withRouter(App);
