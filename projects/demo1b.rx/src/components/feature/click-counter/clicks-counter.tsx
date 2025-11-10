import React, { useEffect, useRef, useState } from 'react';
import { fromEvent, Observable } from 'rxjs';
import { Card } from '@/components/core/card/card';

export const ClicksCounter: React.FC = () => {
    const startRef = useRef<HTMLButtonElement | null>(null);
    const [count, setCount] = useState(0);

    const factory = (): Observable<Event> | null => {
        const btn = startRef.current;
        if (!btn) return null;
        return fromEvent(btn, 'click');
    };

    useEffect(() => {
        const start$ = factory();
        if (!start$) return;
        const subscription = start$.subscribe(() => {
            console.log('Clicked');
            setCount((c) => c + 1);
        });
        return (): void => subscription.unsubscribe();
    }, []);

    return (
        <Card title="Counter Clicks">
            <button ref={startRef}>Click count: {count}</button>
        </Card>
    );
};
