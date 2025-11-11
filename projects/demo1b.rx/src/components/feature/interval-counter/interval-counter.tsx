import { Card } from '@/components/core/card/card';
import React, { useEffect, useRef, useState } from 'react';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';

export const IntervalCounter1: React.FC = () => {
    const startRef = useRef<HTMLButtonElement | null>(null);
    const stopRef = useRef<HTMLButtonElement | null>(null);

    const [counter, setCounter] = useState(0);
    const interval$ = interval(500);

    const factory = (): [Observable<Event>, Observable<Event>] | null => {
        const btnStart = startRef.current;
        const btnStop = stopRef.current;
        if (!btnStart || !btnStop) return null;
        const start$ = fromEvent(btnStart, 'click');
        const stop$ = fromEvent(btnStop, 'click');
        return [start$, stop$];
    };

    useEffect(() => {
        console.log('Use Effect');
        const [start$, stop$] = factory() ?? [null, null];
        if (!start$ || !stop$) return;

        let subscriptionInterval: Subscription;

        const subscription1 = start$.subscribe(() => {
            console.log('Start button clicked');

            subscriptionInterval = interval$.subscribe(() => {
                setCounter((c) => c + 1);
            });
        });

        const subscription2 = stop$.subscribe(() => {
            console.log('Stop button clicked');
            subscriptionInterval?.unsubscribe();
        });

        return (): void => {
            subscription1.unsubscribe();
            subscription2.unsubscribe();
        };
    }, [interval$]);

    return (
        <Card title="Interval Counter 1">
            <p>Interval Counter 1 (no operators)</p>
            <p>
                Counter <output className="counter">{counter}</output>
            </p>
            <button ref={startRef}>Start</button>
            <button ref={stopRef}>Stop</button>
        </Card>
    );
};
