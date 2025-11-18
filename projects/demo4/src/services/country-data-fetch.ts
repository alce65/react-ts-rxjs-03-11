import { getData } from './data-fetch';
import { map, Observable } from 'rxjs';

const URL_BASE = 'https://restcountries.com/v3.1';
const URL = URL_BASE + '/name';
const apiOptions = '?fields=name,capital';

export type Country = {
    name: { common: string; official: string };
    capital: string[];
};

export const searchCountry = (name: string): Observable<Country[]> => {
    const url = `${URL}/${name}${apiOptions}`;
    const encodedUrl = encodeURI(url);
    return getData<Country[]>(encodedUrl)().pipe(
        map((countries) => (Array.isArray(countries) ? countries : [])),
        // Extraigo solo los datos que me interesan
        map((countries) =>
            countries.map((country) => ({
                name: {
                    common: country.name.common,
                    official: country.name.official,
                },
                capital: country.capital,
            }))
        )
    );
};
