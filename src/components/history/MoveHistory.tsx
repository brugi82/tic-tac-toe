import React from 'react';
import { Timeline } from 'antd';
import { AppState } from '../../reducers/RootReducer';
import { connect } from 'react-redux';
import Move from './Move';

type PlayerMove = {
    player: string,
    moveIndex: number
}

type MoveHistoryProps = {
    moves: PlayerMove[],
    selectTurn: (turn: number) => void
}

export const MoveHistory: React.FunctionComponent<MoveHistoryProps> = ({moves, selectTurn}) => {
    return (
        <div>
            <h2>Moves:</h2>
            <Timeline>
                {
                    moves.map(elem => {
                        // return <Timeline.Item><a onMouseOver={() => selectTurn(elem.moveIndex)}>{elem.moveIndex + 1}. {elem.player}</a></Timeline.Item>
                        return <Move moveIndex={elem.moveIndex} player={elem.player} selectTurn={() => selectTurn(elem.moveIndex)}/>
                    })
                }
            </Timeline>
        </div>
    )
}

const mapStateToProps = (appState: AppState) => ({
    moves: appState.game.moveHistory.map(elem => { return {
        player: elem.player === 'X' ? appState.game.x : appState.game.o,
        moveIndex: elem.moveIndex
    }})
})

export default connect(mapStateToProps)(MoveHistory);