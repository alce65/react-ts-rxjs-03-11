import { map, Observable } from 'rxjs';
import { getData } from './data-fetch';

const URL_BASE = 'https://pokeapi.co/api/v2';
const URL = URL_BASE + '/pokemon';
const apiOptions = '?limit=2000&offset=0';

export type PokeApiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonLite[];
};

export type PokemonLite = {
    name: string;
    url: string;
};

export const searchPokemon = (item: string): Observable<PokemonLite[]> => {
    const url = URL + apiOptions;
    return getData<PokeApiResponse>(url)().pipe(
        map((response) =>
            Array.isArray(response.results) ? response.results : []
        ),
        map((pokemons) =>
            pokemons.filter((pk) =>
                pk.name.toLowerCase().includes(item.toLowerCase())
            )
        )
    );
};
