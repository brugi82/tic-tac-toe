import React from 'react';
import { Button } from 'antd';

type GameFieldProps = {
    value: string
}

const GameField: React.FunctionComponent<GameFieldProps> = ({value}) => {
    return (
        <div className="field-button-container">
            <div>
                <Button className="field-button">{value}</Button>
            </div>
        </div>
    )
}

export default GameField;