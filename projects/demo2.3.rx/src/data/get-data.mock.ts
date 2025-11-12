import { mergeMap, Observable, of, throwError, timer } from 'rxjs';
import type { User } from './user';

export const fetchUserMock = (delay = 0, isError = false): Observable<User> => {
    // return new Observable((observer) => {
    //     setTimeout(() => {
    //         if (isError) {
    //             observer.error(new Error('Error al obtener el usuario'));
    //         } else {
    //             observer.next({
    //                 id: 1,
    //                 name: 'Pepe Pérez',
    //                 email: 'pepe.perez@example.com',
    //                 username: 'pepe-p',
    //             });
    //         }
    //     }, delay);
    // });

    const user: User = {
        id: 1,
        name: 'Pepe Pérez',
        email: 'pepe.perez@example.com',
        username: 'pepe-p',
    };

    return timer(delay).pipe(
        mergeMap(() =>
            isError
                ? throwError(() => new Error('Error al obtener el usuario'))
                : of(user)
        )
    );
};
