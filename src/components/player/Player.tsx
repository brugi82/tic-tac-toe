import React from 'react';
import { Avatar, Col } from 'antd';

type PlayerProps = {
    name: string
}

const Player: React.FunctionComponent<PlayerProps> = ({name}) => {
    return (
        <Col xs={6}>
            <div className="player-container">
                <div>
                    <Avatar size={64}>{ name ? name.charAt(0).toLocaleUpperCase() : 'Unknown' }</Avatar>
                    <h1>{name}</h1>
                </div>

            </div>
        </Col>
    );
}

export default Player;