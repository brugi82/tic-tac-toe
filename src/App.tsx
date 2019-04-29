import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import GamePage from './components/game/GamePage';
import HistoryPage from './components/history/HistoryPage';
import HeaderComponent from './components/header/HeaderComponent';
import './App.css';

const { Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <div>
      <Layout className="layout">
        <HeaderComponent/>
        <Content>
          <Switch>
            <Route exact path="/" component={GamePage}/>
            <Route path="/history" component={HistoryPage}/>
          </Switch>
        </Content>
        <Footer className="footer">Tic Tac Toe @2019 Created by Milos Petrovic</Footer>
      </Layout>
    </div>
  );
}

export default App;
