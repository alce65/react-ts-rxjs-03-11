import { scan, tap } from 'rxjs';
import { Card } from '@/components/core/card/card';
import React, { useMemo } from 'react';
import { useObservable } from '@/hooks/use-observable.v4';
import { clicActionService, infoActionService } from '../services/sharing-actions';

export const CounterClicks: React.FC = () => {
    const greeting$ = infoActionService.getObservable();
    const source$ = useMemo(
        () =>
            clicActionService.getObservable().pipe(
                scan((acc, curr) => acc + curr, 0),
                // tap((value) => clicActionService.setSubject(value)) ),
                tap((value) => infoActionService.setSubject(value.toString()))
            ),
        []
    );

    const [count] = useObservable(source$, 0);
    const [greeting] = useObservable(greeting$, '');

    const handleClick = (): void => {
        console.log('click')
       clicActionService.setSubject(1);// next(1)
    };

    return (
        <Card title="Counter Clicks">
            <button onClick={handleClick}>Click count: {count}</button>
            <p>Greeting message: {greeting}</p>
        </Card>
    );
};
