type User = { id: number; name: string };

const fetchUser = async (): Promise<User> => {
    const res = await fetch('/api/user');
    if (!res.ok) throw new Error('Error al obtener el usuario');
    return res.json();
};

export const handleClickIs = async (): Promise<void> => {
    try {
        const user = await fetchUser();
        //      ^?
        console.log(user.name);
    } catch (error) {
        const isError = (error: unknown): error is Error => {
            return error instanceof Error;
        };

        if (isError(error)) {
            console.error(error.message);
        } else {
            console.error('Unknown error', error);
        }
    }
};

import { Observable, map } from 'rxjs';

const numberObservable$ = new Observable<number>((subscriber) => {
    subscriber.next(42);
});

numberObservable$.pipe(
    //@ts-expect-error Error La propiedad 'toUpperCase' no existe en el tipo 'number'
    map((v) => v.toUpperCase()) //❌ Error
);

numberObservable$.subscribe({
    next: (v) => {
        console.log(v.toFixed(2));
        // @ts-expect-error Error La propiedad 'toUpperCase' no existe en el tipo 'number'
        console.log(v.toUpperCase()); // ❌ Error
    },
    error: (err: Error) => {
        console.error('Error:', err.message);
    },
    complete: () => {
        console.log('Completed');
    },
});
