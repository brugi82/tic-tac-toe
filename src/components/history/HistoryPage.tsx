import React, { useState } from 'react';
import { Row, Col, Empty } from 'antd';
import MoveHistory from './MoveHistory';
import GameGrid from '../game/GameGrid';
import { PlayerMove } from '../../reducers/GameState';
import { AppState } from '../../reducers/RootReducer';
import { connect } from 'react-redux';
import { movePlayed } from '../actions/GameActions';

type HistoryPageProps = {
    playerMoves: PlayerMove[]
}

export const HistoryPage: React.FunctionComponent<HistoryPageProps> = props => {
    const [currentTurn, setCurrentTurn] = useState(0);
    const { playerMoves } = props;

    return (
        <div>
            {
                (playerMoves && playerMoves.length > 0) &&
                <Row  type="flex" justify="center" align="middle">
                    <Col xs={24} sm={6} lg={4}>
                        <MoveHistory selectTurn={(turn) => setCurrentTurn(turn)} />
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                        <GameGrid isReadOnly={true} board={playerMoves[currentTurn].board}/>
                    </Col>
                </Row>
            }
        </div>
    );
}

const mapStateToProps = (appState: AppState) => ({
    playerMoves: appState.game.moveHistory
});

export default connect(mapStateToProps)(HistoryPage);