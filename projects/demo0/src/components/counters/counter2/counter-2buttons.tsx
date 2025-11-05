import { useState } from 'react';
import { Card } from '../../core/card/card';
import './counter.css';

type Props = {
    initialCount?: number;
};

export const Counter2Buttons: React.FC<Props> = ({ initialCount = 0 }) => {
    const [count, setCount] = useState<number>(initialCount);

    const handleIncrement = (value = 1): void => {
        setCount(count + value);
    };

    return (
        <Card>
            <p>
                <button onClick={() => handleIncrement(-1)}>➖</button>
                <span className="count-value">count is {count}</span>
                <button onClick={() => handleIncrement()}>➕</button>
            </p>
        </Card>
    );
};
