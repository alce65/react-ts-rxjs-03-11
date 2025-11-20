import React, { useMemo } from 'react';
import {
    debounceTime,
    distinctUntilChanged,
    exhaustMap,
    filter,
    Subject,
    tap,
} from 'rxjs';
import { Card } from '@/components/core/card/card';
import { List } from '@/components/core/list/list';
import { searchPokemon, type PokemonLite } from '@/services/poke-fetch';
import { useObservable } from '@/hooks/use-observable.v4';
import './search-poke.css';

export const SearchPoke: React.FC = () => {
    const action$ = useMemo(() => new Subject<string>(), []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const query = event.currentTarget.value;
        action$.next(query);
    };

    const $source = useMemo(
        () =>
            action$.pipe(
                filter((query) => query.length >= 3),
                debounceTime(500),
                distinctUntilChanged(),
                tap((query) => console.log('Searching for:', query)),
                exhaustMap((query) => searchPokemon(query))
            ),
        [action$]
    );

    const [data, error] = useObservable<PokemonLite[]>($source, []);

    const renderItem = (pokemon: PokemonLite): React.ReactNode => (
        <>
            <a href={pokemon.url} target="_blank">
                {pokemon.name}
            </a>
        </>
    );
    return (
        <Card title="Search Pokemon">
            <label>
                <span>Pokemon name: </span>
                <input type="text" onChange={handleChange} />
            </label>

            {data && data.length > 0 && (
                <List items={data} renderItem={renderItem} />
            )}
            {data && data.length === 0 && <p>No results found.</p>}
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </Card>
    );
};
