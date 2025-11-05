import type { Result } from "../search-page/result";

export const urlAPI = 'https://api.example.com/';

// Posibilidades de Fetch con async/await
// respuesta OK y parseo JSON
// respuesta no-OK
// error de red

export const getData = async (query: string): Promise<Result[]> => {
    const response: Response = await fetch(`${urlAPI}${query}`);

    if (!response.ok) {
        throw new Error(
            `Error fetching data: ${response.status} ${response.statusText}`
        );
    }

    const data: Result[] = await response.json();
    return data;
};

export const getDataThen = async (query: string): Promise<Result[]> => {
    // const response: Response = await
    return fetch(`${urlAPI}${query}`)
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error(
                    `Error fetching data: ${response.status} ${response.statusText}`
                );
            }
            return response;
        })
        .then((response: Response) => {
            return response.json();
        })
        .then((data: Result[]) => {
            return data.map((item: Result) => item);
        })
        .catch((error: Error) => {
            throw error;
        });

    // const data: Result[] = await response.json();
    // return data;
};
