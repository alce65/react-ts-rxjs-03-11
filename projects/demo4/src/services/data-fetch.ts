import { HttpError } from '@/types/http-error';
import { catchError, Observable, switchMap, tap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';


export const getData = <T>(url: string): () => Observable<T> => {

    const source$ = fromFetch(url).pipe(
        tap((x) => console.log('Fetching data from', x)),
        switchMap<Response, Promise<T>>((response) => {
            if (!response.ok) {
                throw new HttpError(
                    response.status,
                    response.statusText,
                    'Server response was not ok'
                );
            }
            const data = response.json();
            console.log('Processed Response:', data);
            return data;
        }),
        catchError((err) => {
            if (!(err instanceof HttpError)) {
                throw new HttpError(
                    0,
                    'Network Error',
                    'A network error occurred',
                    err
                );
            }
            throw err;
        })
    );

    return () => source$
};
