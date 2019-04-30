import React from 'react';
import { Button } from 'antd';

const GameField: React.FC = () => {
    return (
        <div className="field-button-container">
            <div>
                <Button className="field-button">X</Button>
            </div>
        </div>
    )
}

export default GameField;