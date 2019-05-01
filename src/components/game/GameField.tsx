import React from 'react';
import { Button } from 'antd';
import { AppState } from '../../reducers/RootReducer';

type GameFieldProps = {
    value: string,
    onClick: () => void
}

const GameField: React.FunctionComponent<GameFieldProps> = ({value, onClick}) => {
    return (
        <div className="field-button-container">
            <div>
                <Button className="field-button" onClick={() => onClick()} disabled={!!value}>{value}</Button>
            </div>
        </div>
    )
}

export default GameField;