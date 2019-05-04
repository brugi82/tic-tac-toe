import React from 'react';
import { Row, Col } from 'antd';
import GameField from './GameField';
import { connect } from 'react-redux';
import { AppState } from '../../reducers/RootReducer';
import { movePlayed } from '../actions/GameActions';
import { GameScore } from '../../util/calculateGameResult';

type GameGridProps = {
    gameScore: GameScore,
 }

type GameGridOwnProps = {
    isReadOnly: boolean,
    board: any[]
}

type GameGridDispatchProps = {
    movePlayed: typeof movePlayed
}

export const GameGrid: React.FunctionComponent<GameGridProps & GameGridOwnProps & GameGridDispatchProps> = props => {
    const { gameScore, movePlayed, isReadOnly, board } = props;
    const size = [...Array(3)];

    const renderRow = (index: number) => {
        return (
            <Row gutter={16} style={{marginTop: 12, marginBottom: 12}} key={index}>
                {
                    size.map((elem, cellIndex) => {
                        return renderCell(index, cellIndex);
                    })
                }
            </Row>
        )
    }

    const renderCell = (rowIndex: number, columnIndex: number) => {
        const cellKey = `r${rowIndex}c${columnIndex}`;
        return (
            <Col xs={8} key={cellKey}>
                <div >
                    <GameField key={cellKey} value={board[rowIndex][columnIndex]} onClick={() => fieldSelected(rowIndex, columnIndex)}
                        rowIndex={rowIndex} columnIndex={columnIndex} isReadOnly={isReadOnly || (gameScore !== 'NONE')}/>
                </div>
            </Col>
        );
    }

    const fieldSelected = (rowIndex: number, columnIndex: number) => {
        movePlayed(rowIndex, columnIndex);
    }

    return (
        <div className="game-grid-container">
            {
                size.map((elem, rowIndex) => {
                    return renderRow(rowIndex);
                })
            }
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
        gameScore: state.game.gameResult.score,
});

const dispatchProps = {
    movePlayed
};

export default connect(mapStateToProps, dispatchProps)(GameGrid);