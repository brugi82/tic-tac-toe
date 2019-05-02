import React from 'react';
import { Button } from 'antd';
import { AppState } from '../../reducers/RootReducer';
import { GameScore, NONE } from '../../util/calculateWinner';
import { connect } from 'react-redux';

type GameFieldProps = {
    value: string,
    gameScore: GameScore,
    onClick: () => void
}

const GameField: React.FunctionComponent<GameFieldProps> = props => {
    const { value, onClick, gameScore } = props;
    return (
        <div className="field-button-container">
            <div>
                <Button className="field-button" onClick={() => onClick()} disabled={!!value || (gameScore !== NONE)}>{value}</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (appState: AppState) => ({
    gameScore: appState.game.gameResult.score
});

export default connect(mapStateToProps)(GameField);