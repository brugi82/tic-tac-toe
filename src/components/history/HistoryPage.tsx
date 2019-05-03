import React from 'react';
import { Row, Col } from 'antd';
import MoveHistory from './MoveHistory';
import { GameGrid } from '../game/GameGrid';

const HistoryPage: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <Row>
                <Col xs={24} sm={8}>
                    <MoveHistory />
                </Col>
                <Col xs={24} sm={16}>
                    
                </Col>
            </Row>
        </div>
    );
}

export default HistoryPage;