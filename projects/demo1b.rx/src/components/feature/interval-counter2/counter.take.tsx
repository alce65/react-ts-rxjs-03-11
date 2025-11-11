import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    fromEvent,
    interval,
    Observable,
    scan,
    skipUntil,
    takeUntil,
} from 'rxjs';
import { Card } from '../../core/card/card';

// Versión componente de React del ejercicio 07-counter de Fundamentals

// El start solo funciona una primera vez, luego no hace nada
// Después de darle a stop, el start ya no funciona

export const IntervalCounter2Take: React.FC = () => {
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

        return interval$.pipe(
            skipUntil(start$),
            // scan((reduce function, start value)
            scan((a) => a + 1, 0),
            takeUntil(stop$)
        );
    }, []);

    // No se utiliza useObservable para que se vea como la desuscripción la hace takeUntil
    // en lugar de la función cleanup del useEffect

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Use effect: IntervalCounter2Take');
        factoryCounter()?.subscribe(setCounter);
    }, [factoryCounter]);

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
