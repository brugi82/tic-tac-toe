import React from 'react';
import { Timeline } from 'antd';
import { AppState } from '../../reducers/RootReducer';
import { connect } from 'react-redux';

type PlayerMove = {
    player: string,
    moveIndex: number
}

type MoveHistoryProps = {
    moves: PlayerMove[]
}

const MoveHistory: React.FunctionComponent<MoveHistoryProps> = ({moves}) => {
    return (
        <div>
            <Timeline>
                {
                    moves.map(elem => {
                        return <Timeline.Item>{elem.moveIndex + 1}. {elem.player}</Timeline.Item>
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