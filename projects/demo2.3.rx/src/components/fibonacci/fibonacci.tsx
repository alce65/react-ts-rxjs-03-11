import React, { useRef, useState } from 'react';
import './fibonacci.css';
import { fromEvent, Observable } from 'rxjs';
import { Card } from '../core/card/card';
import { FibonacciItems } from './fibonacci-items';
import { useSubscription } from '@/hooks/use-observable.v3';


export const Fibonacci: React.FC = () => {
    const radioRef = useRef<HTMLInputElement | null>(null);
    const [typeLimit, setTypeLimit] = useState<'numbers' | 'limited'>(
        'numbers'
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setTypeLimit(value as 'numbers' | 'limited');
    };

    const factoryRadio = (): Observable<
        React.ChangeEvent<HTMLInputElement>
    > | null => {
        const radio = radioRef.current;
        if (!radio) return null;
        return fromEvent<React.ChangeEvent<HTMLInputElement>>(radio, 'change');
    };

    useSubscription<React.ChangeEvent<HTMLInputElement>>(factoryRadio, {
        next: (ev) => handleChange(ev),
    });

    return (
        <Card title="Fibonacci sequences v.2">
            <div className="options" ref={radioRef}>
                <label>
                    <input
                        type="radio"
                        name="fibonacci"
                        value="numbers"
                        defaultChecked
                    />
                    Generate by number of items
                </label>
                <label>
                    <input type="radio" name="fibonacci" value="limited" />
                    Generate by limit value
                </label>
            </div>
            <FibonacciItems typeLimit={typeLimit} />
        </Card>
    );
};
