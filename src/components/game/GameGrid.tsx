import React from 'react';
import { Row, Col } from 'antd';
import GameField from './GameField';
import { connect } from 'react-redux';
import GameState from '../../reducers/GameState';
import { AppState } from '../../reducers/RootReducer';

type GameGridProps = {
    board: any[]
}

export const GameGrid: React.FunctionComponent<GameGridProps> = props => {
    const { board } = props;
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
                    <GameField key={cellKey} value={board[rowIndex][columnIndex]}/>
                </div>
            </Col>
        );
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

export default connect(mapStateToProps)(GameGrid);