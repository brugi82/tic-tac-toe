import React from 'react';
import { Row, Col } from 'antd';
import Player from '../player/Player';
import GameGrid from './GameGrid';
import { AppState } from '../../reducers/RootReducer';
import { connect } from 'react-redux';

type GamePageProps = {
    x: string,
    o: string,
    currentTurn: string,
    gameResult: string
}

export const GamePage: React.FunctionComponent<GamePageProps> = props => {
    const { x, o, currentTurn, gameResult } = props;

    return (
        <div>
            <Row type="flex" justify="center" align="middle">
                <Col xs={24} sm={6} lg={4}>
                    <Player symbol={'X'}/>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <GameGrid/>
                </Col>
                <Col xs={24} sm={6} lg={4}>
                    <Player symbol={'O'}/>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = (appState: AppState) => ({
    x: appState.game.x,
    o: appState.game.o,
    currentTurn: appState.game.currentTurn,
    gameResult: appState.game.gameResult.score
});

export default connect(mapStateToProps)(GamePage);