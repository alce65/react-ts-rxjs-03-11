import React, { useCallback, useRef } from 'react';
import {
    concatWith,
    debounceTime,
    distinctUntilChanged,
    from,
    fromEvent,
    map,
    Observable,
    of,
    switchMap,
    take,
    takeWhile,
    tap,
    toArray,
} from 'rxjs';
import { fibonacci } from './fibo.service';
import { Card } from '../core/card/card';
import { useObservable } from '@/hooks/use-observable.v3';

type Props = {
    typeLimit?: 'limited' | 'numbers';
};

const EMPTY_ARRAY: number[] = [];

export const FibonacciItems: React.FC<Props> = ({ typeLimit = 'limited' }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const inputLabel =
        typeLimit === 'numbers' ? 'Number of items' : 'Limit of numbers';

    const factory = useCallback((): Observable<number[]> | null => {
        const inputNumber = inputRef.current;
        if (!inputNumber) return null;

        return of([]).pipe(
            tap(() => (inputNumber.value = '')),
            concatWith(
                fromEvent<React.InputEvent<HTMLInputElement>>(
                    inputNumber,
                    'input'
                )
                    .pipe(
                        // esperar 300ms de silencio y emitir solo el último valor
                        debounceTime(300),
                        // extraer el valor del input
                        map((ev) => {
                            const { value } = ev.target as HTMLInputElement;
                            const num = Number(value);
                            if (Number.isNaN(num) || num < 1) {
                                return 0;
                            }
                            return num;
                        }),
                        // evitar emitir si el valor no cambia
                        distinctUntilChanged()
                    )
                    .pipe(
                        tap((num) => console.log('Processed number:', num)),
                        switchMap((num) =>
                            from(fibonacci()).pipe(
                                typeLimit === 'numbers'
                                    ? take(num)
                                    : takeWhile((val) => val < num),
                                toArray()
                            )
                        )
                    )
            )
        );
    }, [typeLimit]);

    const serie = useObservable<number[] | null>(factory, EMPTY_ARRAY);
    if (!serie) return null;

    return (
        <Card title="Fibonacci Series">
            <label>
                <span>{inputLabel}</span>
                <input name="value" type="text" ref={inputRef} />
            </label>
            <p>
                datos:
                <output>{serie.join(', ')}</output>
            </p>
        </Card>
    );
};
