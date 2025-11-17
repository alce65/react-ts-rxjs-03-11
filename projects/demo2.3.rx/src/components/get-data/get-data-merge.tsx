const fetchMock = (): Promise<string> => {
    return new Promise((resolve) => {
        // Simulamos una petición a un API
        setTimeout(() => {
            console.log('Fetching data...');
            resolve('Data from API');
        }, 1000);
    });
};

import React, { useCallback, useRef } from 'react';
import { Card } from '../core/card/card';
import { useObservable } from '@/hooks/use-observable.v3';
import { from, fromEvent, mergeMap, tap, type Observable } from 'rxjs';

export const GetDataMerge: React.FC = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const factory = useCallback((): Observable<string> | null => {
        if (!buttonRef.current) return null;

        const event$ = fromEvent(buttonRef.current, 'click');

        return event$.pipe(
            // Cada vez que se hace click, 
            // //se inicia una nueva petición
            // Si hay una petición en curso, se cancela
            mergeMap(() =>
                from(fetchMock()).pipe(
                    tap((data) => console.log('Data received:', data))
                )
            )
        );
    }, []);

    const data = useObservable(factory, '');

    return (
        <Card title="Higher-Order Observable Example">
            <p>Uso de mergeMap para manejar peticiones concurrentes</p>
            <button ref={buttonRef}>Fetch Data</button>
            {data && <p>Received: {data}</p>}
        </Card>
    );
};
