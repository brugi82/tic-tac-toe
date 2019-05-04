import React from 'react';
import { Button } from 'antd';
import { AppState } from '../../reducers/RootReducer';
import { GameScore, NONE } from './../../util/calculateGameResult';
import { connect } from 'react-redux';

type GameFieldOwnProps = {
    value: string,
    rowIndex: number,
    columnIndex: number,
    isReadOnly: boolean,
    onClick: () => void   
}

type GameFieldProps = {
    winningFields: any[],
}

export const GameField: React.FunctionComponent<GameFieldProps & GameFieldOwnProps> = ({ value, onClick, isReadOnly, rowIndex, columnIndex, winningFields }) => {
    const isWinningField = () => {
        let isWinningField = false;
        if (winningFields) {
            for (let fieldIndex = 0; fieldIndex < winningFields.length; fieldIndex++) {
                if (winningFields[fieldIndex] && winningFields[fieldIndex][0] === rowIndex && winningFields[fieldIndex][1] === columnIndex) {
                    isWinningField = true;
                    break;
                }
            }
        }
        return isWinningField;
    }

    return (
        <div className="field-button-container">
            <div>
                <Button className={`field-button ${isWinningField() && 'field-winning-button'}`} onClick={() => onClick()} disabled={!!value || isReadOnly}>{value}</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (appState: AppState) => ({
    winningFields: appState.game.gameResult.position
});

export default connect(mapStateToProps)(GameField);