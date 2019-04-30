import React from 'react';
import { Avatar, Col } from 'antd';

type PlayerProps = {
    name: string, 
    isWinner: boolean,
    isActive: boolean
}

const Player: React.FunctionComponent<PlayerProps> = ({name, isActive, isWinner}) => {
    return (
        <div className={`player-container ${isActive && 'player-active'} ${isWinner && 'player-winner'}`}>
            <div>
                <Avatar size={64}>{ name ? name.charAt(0).toLocaleUpperCase() : 'Unknown' }</Avatar>
                <h1>{name}</h1>
            </div>

        </div>
    );
}

export default Player;