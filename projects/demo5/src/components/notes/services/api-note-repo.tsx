import { fromFetch } from 'rxjs/fetch';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { HttpError } from '../types/http-error';
import type { Repository } from '../types/repo';
import type { Note, NoteDTO } from '../types/notes';

export class ApiNoteRepository implements Repository<Note, NoteDTO> {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    getById(id: number): Observable<Note> {
        const fetch$ = fromFetch(`${this.apiUrl}/${id}`).pipe(
            switchMap<Response, Promise<Note> | Observable<never>>((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return throwError(
                        () =>
                            new HttpError(
                                response.status,
                                response.statusText,
                                'Fetch error code: ' + response.status
                            )
                    );
                }
            }),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );

        return fetch$;
    }

    getAll(): Observable<Note[]> {
        const fetch$ = fromFetch(this.apiUrl).pipe(
            switchMap<Response, Promise<Note[]> | Observable<never>>((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return throwError(
                        () =>
                            new HttpError(
                                response.status,
                                response.statusText,
                                'Fetch error code: ' + response.status
                            )
                    );
                }
            }),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );

        return fetch$;
    }

    create(note: NoteDTO): Observable<Note> {
        const fetch$ = fromFetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        }).pipe(
            switchMap<Response, Promise<Note> | Observable<never>>((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return throwError(
                        () =>
                            new HttpError(
                                response.status,
                                response.statusText,
                                'Fetch error code: ' + response.status
                            )
                    );
                }
            }),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );

        return fetch$;
    }

    update(id: number, note: Partial<NoteDTO>): Observable<Note> {
        const fetch$ = fromFetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        }).pipe(
            switchMap<Response, Promise<Note> | Observable<never>>((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return throwError(
                        () =>
                            new HttpError(
                                response.status,
                                response.statusText,
                                'Fetch error code: ' + response.status
                            )
                    );
                }
            }),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );

        return fetch$;
    }
    delete(id: number): Observable<void> {
        const fetch$ = fromFetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE',
        }).pipe(
            switchMap<Response, Promise<void> | Observable<never>>(
                (response) => {
                    if (response.ok) {
                        return Promise.resolve();
                    } else {
                        return throwError(
                            () =>
                                new HttpError(
                                    response.status,
                                    response.statusText,
                                    'Fetch error code: ' + response.status
                                )
                        );
                    }
                }
            ),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );
        return fetch$;
    }
}
