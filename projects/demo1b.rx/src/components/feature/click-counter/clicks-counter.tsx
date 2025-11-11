import React, { useEffect, useRef, useState } from 'react';
import { fromEvent, map, Observable, scan } from 'rxjs';
import { Card } from '@/components/core/card/card';

export const ClicksCounter: React.FC = () => {
    const startRef = useRef<HTMLButtonElement | null>(null);
    const [count, setCount] = useState(0);

    const factory = (): Observable<number> | null => {
        const btn = startRef.current;
        if (!btn) return null;
        return fromEvent(btn, 'click').pipe(
            map(() => 1),
            scan((acc, curr) => acc + curr, 0)
        );
    };

    useEffect(() => {
        const start$ = factory();
        if (!start$) return;
        const subscription = start$.subscribe(setCount);
        return (): void => subscription.unsubscribe();
    }, []);

    return (
        <Card title="Counter Clicks">
            <button ref={startRef}>Click count: {count}</button>
        </Card>
    );
};
