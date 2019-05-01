import React from 'react';
import { Row, Col } from 'antd';
import GameField from './GameField';
import { connect } from 'react-redux';
import { AppState } from '../../reducers/RootReducer';
import { movePlayed } from '../actions/GameActions';

type GameGridProps = {
    board: any[],
    movePlayed: typeof movePlayed
}

export const GameGrid: React.FunctionComponent<GameGridProps> = props => {
    const { board, movePlayed } = props;
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
                    <GameField key={cellKey} value={board[rowIndex][columnIndex]} onClick={() => fieldSelected(rowIndex, columnIndex)}/>
                </div>
            </Col>
        );
    }

    const fieldSelected = (rowIndex: number, columnIndex: number) => {
        movePlayed(rowIndex, columnIndex, 'X');
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

const mapStateToProps = (state: AppState) => {
    console.log(state);
    return {
        board: state.game.board
    };
};

const dispatchProps = {
    movePlayed
};

export default connect(mapStateToProps, dispatchProps)(GameGrid);