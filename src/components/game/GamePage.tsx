import React from 'react';
import { Row, Col } from 'antd';
import Player from '../player/Player';

const GamePage: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <Row>
                <Player name="Milos" isActive={true} isWinner={false}/>
                <Col xs={12}>
                    TEST
                </Col>
                <Player name="Joksa" isActive={false} isWinner={true}/>
            </Row>
        </div>
    );
}

export default GamePage;