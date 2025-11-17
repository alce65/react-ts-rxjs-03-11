import React, { useRef } from 'react';
import './fibonacci.css';
import { fromEvent, map, Observable } from 'rxjs';
import { Card } from '../core/card/card';
import { FibonacciItems } from './fibonacci-items';
import { useObservable } from '@/hooks/use-observable.v3';

type TypeLimits = 'numbers' | 'limited';

export const Fibonacci: React.FC = () => {
    const radioRef = useRef<HTMLInputElement | null>(null);
    
    
    // const [typeLimit, setTypeLimit] = useState<TypeLimits>(
    //     'numbers'
    // );

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     const { value } = event.target;
    //     setTypeLimit(value as TypeLimits);
    // };

    const factoryRadio = (): Observable<
        TypeLimits
    > | null => {
        const radio = radioRef.current;
        if (!radio) return null;
        return fromEvent<React.ChangeEvent<HTMLInputElement>>(radio, 'change')
        .pipe(
            map(event =>{
                const { value } = event.target;
                return value as TypeLimits;
            })
        );
    };

    // useSubscription<React.ChangeEvent<HTMLInputElement>>(factoryRadio, {
    //     next: (ev) => handleChange(ev),
    // });

    const typeLimit = useObservable<TypeLimits>(factoryRadio, 'numbers');

    if (!typeLimit) return null;
    return (
        <Card title="Fibonacci sequences v.3">
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
