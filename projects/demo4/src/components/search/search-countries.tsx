import React, { useRef } from 'react';
import {
    debounceTime,
    distinctUntilChanged,
    fromEvent,
    map,
    Observable,
    switchMap,
} from 'rxjs';
import './read-input.css';
import { Card } from '../core/card/card';

import { List } from '../core/list/list';
import { useObservable } from '@/hooks/use-observable.v4';
import { searchCountry, type Country } from '@/services/country-data-fetch';

export const SearchCountries: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const factory = (): Observable<Country[]> | null => {
        const input = inputRef.current;
        if (!input) return null;

        const search$ = fromEvent<React.ChangeEvent<HTMLInputElement>>(
            input,
            'input'
        ).pipe(
            debounceTime(500),
            map((event) => {
                const { value } = event.target;
                return value;
            }),
            distinctUntilChanged(),
            switchMap((item) => {
                return searchCountry(item);
            })
        );
        return search$;
    };

    const [data, error] = useObservable<Country[]>(factory, []);

    const renderItem = (country: Country): React.ReactNode => (
        <>
            <p>
                {country.name.common} - Capital: {country.capital.join(', ')}
            </p>
            <small>{country.name.official}</small>
        </>
    );

    return (
        <Card title="Search Countries">
            <label>
                <span>Country</span>
                <input type="text" ref={inputRef} />
            </label>

            {data && data.length > 0 && (
                <List items={data} renderItem={renderItem} />
            )}
            {data && data.length === 0 && <p>No results found.</p>}
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </Card>
    );
};
