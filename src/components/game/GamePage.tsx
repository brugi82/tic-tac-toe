import React from 'react';
import { Row, Col } from 'antd';
import Player from '../player/Player';

const GamePage: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <Row>
                <Player name="Milos"/>
                <Col xs={12}>
                    TEST
                </Col>
                <Player name="Joksa"/>
            </Row>
        </div>
    );
}

export default GamePage;