import React, { useCallback, useRef } from 'react';
import {
    fromEvent,
    interval,
    map,
    merge,
    NEVER,
    Observable,
    of,
    scan,
    switchMap,
} from 'rxjs';
import { Card } from '../core/card/card';
import { useObservable } from '@/hooks/use-observable.v3';

// Versión componente de React del ejercicio 07-counter de Fundamentals

// El start solo funciona una primera vez, luego no hace nada
// Después de darle a stop, el start ya no funciona

type EventInfo = { isRunning: boolean; hasReset: boolean };

export const IntervalCounter4: React.FC = () => {
    const startRef = useRef<HTMLButtonElement | null>(null);
    const pauseRef = useRef<HTMLButtonElement | null>(null);
    const stopRef = useRef<HTMLButtonElement | null>(null);

    const factoryButtons = ():
        | [Observable<EventInfo>, Observable<EventInfo>, Observable<EventInfo>]
        | null => {
        const btnStart = startRef.current;
        const btnPause = pauseRef.current;
        const btnStop = stopRef.current;
        if (!btnStart || !btnPause || !btnStop) return null;
        const start$ = fromEvent(btnStart, 'click').pipe(
            map(() => ({ isRunning: true, hasReset: false }))
        );
        const pause$ = fromEvent(btnPause, 'click').pipe(
            map(() => ({ isRunning: false, hasReset: false }))
        );
        const stop$ = fromEvent(btnStop, 'click').pipe(
            map(() => ({ isRunning: false, hasReset: true }))
        );
        return [start$, pause$, stop$];
    };

    // Como la función factoryCounter depende de una segunda función factory,
    // es necesario incluirla en las dependencias del useEffect
    // y por tanto se debe memorizar con useCallback/
    // Aunque en este caso, no hacerlo no tiene ningún efecto

    const factoryCounter = useCallback((): Observable<number> | null => {
        const [start$, pause$, stop$] = factoryButtons() || [];
        if (!start$ || !pause$ || !stop$) return null;

        return merge(start$, pause$, stop$)
            .pipe(
                switchMap((eventInfo: EventInfo) => {
                    if (eventInfo.hasReset) {
                        return of(-1); // valor especial para reset
                    }
                    return eventInfo.isRunning ? interval(100) : NEVER;
                })
            )
            .pipe(
                // scan((reduce function, start value)
                scan((a, val) => {
                    if (val === -1) return 0; // reset explícito
                    return a + 1;
                }, 0)
            );
    }, []);

    // No se utiliza useObservable para que se vea como la desuscripción la hace takeUntil
    // en lugar de la función cleanup del useEffect

    const counter = useObservable(factoryCounter, 0);

    return (
        <Card title="Interval Counter 3 buttons">
            <p>Interval counter con desuscripción automática</p>
            <p>
                Counter <output className="counter">{counter}</output>
            </p>
            <button ref={startRef}>Start</button>
            <button ref={pauseRef}>Pause</button>
            <button ref={stopRef}>Stop</button>
        </Card>
    );
};
