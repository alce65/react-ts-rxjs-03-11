import React, { useRef } from 'react';
import {
    debounceTime,
    distinctUntilChanged,
    fromEvent,
    map,
    Observable,
} from 'rxjs';
import './read-input.css';
import { Card } from '../core/card/card';
import { useObservable } from '@/hooks/use-observable.v4';


export const ReadInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const factory = (): Observable<string> | null => {
        const input = inputRef.current;
        if (!input) return null;

        const input$ = fromEvent<React.ChangeEvent<HTMLInputElement>>(
            input,
            'input'
        ).pipe(
            debounceTime(300),
            map((event) => {
                const { value } = event.target;
                return value;
            }),
            distinctUntilChanged()
        );

        return input$;
    };

    const [data] = useObservable<string>(factory, '');

    return (
        <Card title="React Input">
            <label>
                <span>Name</span>
                <input type="text" ref={inputRef} />
            </label>
            <p>
                Input: <output className="series">{data}</output>
            </p>
        </Card>
    );
};
