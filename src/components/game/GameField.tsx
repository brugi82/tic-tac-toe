import React from 'react';
import { Button } from 'antd';
import { AppState } from '../../reducers/RootReducer';
import { GameScore, NONE } from '../../util/calculateWinner';
import { connect } from 'react-redux';

type GameFieldOwnProps = {
    value: string,
    rowIndex: number,
    columnIndex: number,
    onClick: () => void   
}

type GameFieldProps = {
    gameScore: GameScore,
    winningFields: any[],

}

const GameField: React.FunctionComponent<GameFieldProps & GameFieldOwnProps> = ({ value, onClick, gameScore, rowIndex, columnIndex, winningFields }) => {
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
                <Button className={`field-button ${isWinningField() && 'field-winning-button'}`} onClick={() => onClick()} disabled={!!value || (gameScore !== NONE)}>{value}</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (appState: AppState) => ({
    gameScore: appState.game.gameResult.score,
    winningFields: appState.game.gameResult.position
});

export default connect(mapStateToProps)(GameField);