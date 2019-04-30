import React from 'react';
import { Row, Col } from 'antd';
import Player from '../player/Player';
import GameGrid from './GameGrid';

const GamePage: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <Row type="flex" justify="center" align="middle">
                <Col xs={24} sm={6} lg={4}>
                    <Player name="Milos" isActive={true} isWinner={false}/>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <GameGrid/>
                </Col>
                <Col xs={24} sm={6} lg={4}>
                    <Player name="Joksa" isActive={false} isWinner={true}/>
                </Col>
            </Row>
        </div>
    );
}

export default GamePage;