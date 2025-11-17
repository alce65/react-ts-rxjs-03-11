import React, { useCallback, useRef } from 'react';
import {
    fromEvent,
    interval,
    Observable,
    scan,
    switchMap,
    takeUntil,
} from 'rxjs';
import { Card } from '../core/card/card';
import { useObservable } from '@/hooks/use-observable.v3';

// Versión componente de React del ejercicio 07-counter de Fundamentals

// El start solo funciona una primera vez, luego no hace nada
// Después de darle a stop, el start ya no funciona

export const IntervalCounter3: React.FC = () => {
    const startRef = useRef<HTMLButtonElement | null>(null);
    const stopRef = useRef<HTMLButtonElement | null>(null);

    const factoryButtons = ():
        | [Observable<Event>, Observable<Event>]
        | null => {
        const btnStart = startRef.current;
        const btnStop = stopRef.current;
        if (!btnStart || !btnStop) return null;
        const start$ = fromEvent(btnStart, 'click');
        const stop$ = fromEvent(btnStop, 'click');
        return [start$, stop$];
    };

    // Como la función factoryCounter depende de una segunda función factory,
    // es necesario incluirla en las dependencias del useEffect
    // y por tanto se debe memorizar con useCallback/
    // Aunque en este caso, no hacerlo no tiene ningún efecto

    const factoryCounter = useCallback((): Observable<number> | null => {
        const interval$ = interval(100);
        const [start$, stop$] = factoryButtons() || [];
        if (!start$ || !stop$) return null;

        return start$.pipe(
            switchMap(() =>
                interval$.pipe(
                    // scan((reduce function, start value)
                    scan((a) => a + 1, 0),
                    takeUntil(stop$)
                )
            )
        );
    }, []);

    // No se utiliza useObservable para que se vea como la desuscripción la hace takeUntil
    // en lugar de la función cleanup del useEffect

    const counter = useObservable(factoryCounter, 0);

    return (
        <Card title="One Interval Counter v2">
            <p>Interval counter con desuscripción automática</p>
            <p>
                Counter <output className="counter">{counter}</output>
            </p>
            <button ref={startRef}>Start</button>
            <button ref={stopRef}>Stop</button>
        </Card>
    );
};
