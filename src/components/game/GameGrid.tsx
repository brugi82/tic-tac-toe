import React from 'react';
import { Row, Col } from 'antd';

const GameGrid: React.FC = () => {
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
                <div className="game-field" key={cellKey}>
                    test
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

export default GameGrid;