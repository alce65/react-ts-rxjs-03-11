import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    debounceTime,
    from,
    fromEvent,
    map,
    Observable,
    take,
    takeWhile,
    toArray,
    type Observer,
} from 'rxjs';
import { fibonacci } from './fibo.service';
import { Card } from '../core/card/card';

type Props = {
    typeLimit?: 'limited' | 'numbers';
};

export const FibonacciItems: React.FC<Props> = ({ typeLimit = 'limited' }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [serie, setSerie] = useState<number[]>([]);

    const inputLabel =
        typeLimit === 'numbers' ? 'Number of items' : 'Limit of numbers';

    const getFibonacci = useCallback(
        (value: number) => {
            setSerie([]);
            return from(fibonacci()).pipe(
                typeLimit === 'limited'
                    ? takeWhile((num) => num < value)
                    : take(value),
                toArray()
            );
        },
        [typeLimit]
    );

    const factory = useCallback((): Observable<number> | null => {
        const inputNumber = inputRef.current;
        if (!inputNumber) return null;
        inputNumber.value = '';
        setSerie([]);

        const input$ = fromEvent<React.InputEvent<HTMLInputElement>>(
            inputNumber,
            'input'
        );

        return input$.pipe(
            debounceTime(500),
            map((event) =>
                Number((event.target as HTMLInputElement).value || 0)
            )
        );
    }, []);

    useEffect(() => {
        const input$ = factory();
        if (!input$) return;
        const observer: Partial<Observer<number[]>> = {
            next: (value: number[]): void => {
                console.log('Fibonacci series:', value);
                setSerie(value);
            },
        };
        const subscription = input$.subscribe((num: number) => {
            console.log('Input number:', num);
            getFibonacci(num).subscribe(observer);
        });

        return (): void => subscription.unsubscribe();
    }, [factory, getFibonacci]);

    return (
        <Card title="Fibonacci Series">
            <label>
                <span>{inputLabel}</span>
                <input name="value" type="text" ref={inputRef} />
            </label>
            <p>datos: {serie.join(', ')}</p>
        </Card>
    );
};
