import React from 'react';
import { Avatar } from 'antd';
import { AppState } from '../../reducers/RootReducer';
import { GameScore, TIE } from '../../util/calculateWinner';
import { connect } from 'react-redux';

type PlayerOwnProps = {
    symbol: string, 
}

type PlayerProps = {
    name: string,
    gameScore: GameScore,
    currentTurn: string
}

const Player: React.FunctionComponent<PlayerProps & PlayerOwnProps> = props => {
    const {name, symbol, currentTurn, gameScore} = props;
    const isActive = currentTurn === symbol;
    const isWinner = gameScore === symbol;
    const isTie = gameScore === TIE;
    let className = 'player-inactive';
    if (isActive) {
        className = 'player-active';
    }
    if (isWinner) {
        className = 'player-winner';
    } else if (isTie) {
        className = 'player-tie';
    }
    return (
        <div className={`player-container ${className}`}>
            <div>
                <Avatar size={64}>{ name ? name.charAt(0).toLocaleUpperCase() : 'Unknown' }</Avatar>
                <h1>{name}</h1>
                { isActive && <h1>Your move!</h1> }
                { isWinner && <h1>Your are the winner!</h1> }
                { isTie && <h1>Game is tied!</h1> }
            </div>

        </div>
    );
}

const mapStateToProps = (appState: AppState, ownProps: PlayerOwnProps) => ({
    gameScore: appState.game.gameResult.score,
    currentTurn: appState.game.currentTurn,
    name: ownProps.symbol === 'X' ? appState.game.x : appState.game.o
})

export default connect(mapStateToProps)(Player);