import React, { useState } from 'react';
import { Timeline } from 'antd';

type MoveProps = {
    moveIndex: number,
    player: string,
    selectTurn: () => void
}

const Move: React.FunctionComponent<MoveProps> = ({moveIndex, player, selectTurn}) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const onMouseEnter = () => {
        setIsMouseOver(true);
    }

    const onMouseLeave = () => {
        setIsMouseOver(false);
    }

    const getClassName = () => {
        let className = '';
        if (isMouseOver) {
            className = 'move-active';
        }

        return className;
    }

    return (
        <Timeline.Item>
            <a className={getClassName()} onMouseEnter={() => onMouseEnter()} 
                onMouseLeave={() => onMouseLeave()} onMouseOver={() => selectTurn()}>
                {moveIndex + 1}. {player}
            </a>
        </Timeline.Item>
    )
}

export default Move;