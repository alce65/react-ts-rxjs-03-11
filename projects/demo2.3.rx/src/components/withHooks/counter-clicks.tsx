import React, { useCallback, useRef } from 'react';

import { fromEvent, map, Observable, scan } from 'rxjs';
import { Card } from '../core/card/card';
import { useObservable } from '@/hooks/use-observable.v3';

// Contador de clicks usando RxJS y useEffect
// punto de partida para un hook personalizado

export const CounterClicks: React.FC = () => {
    const startRef = useRef<HTMLButtonElement | null>(null);
    
    const factory = useCallback( (): Observable<number> | null => {
        const btn = startRef.current;
        if (!btn) return null;
        return fromEvent(btn, 'click').pipe(
            map(() => 1),
            scan((acc, curr) => acc + curr, 0)
        );
    }, [])
    
    
    

    
    const count = useObservable<number>(factory, 0);

    return (
        <Card title="Counter Clicks">
            <button ref={startRef}>Click count: {count}</button>
        </Card>
    );
};
