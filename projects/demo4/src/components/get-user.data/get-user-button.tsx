import React, { useRef } from 'react';
import { exhaustMap, fromEvent, Observable, tap } from 'rxjs';
import { Card } from '../core/card/card';
import type { User } from '@/types/user';
import { getUserById } from '@/services/user-data-fetch';
import { useObservable } from '@/hooks/use-observable.v4';

// Componente que hace una llamada a un API (fetch)
// al hacer click en un botón
// con la lógica del proceso de fetch en un servicio separado
// (función fetchTodoService)

export const GetUserById: React.FC = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const id = '1';
    const factory = (): Observable<User> | null => {
        const button = buttonRef.current;
        if (!button) return null;
        const button$ = fromEvent(button, 'click');
        const data$ = button$.pipe(
            tap(() => console.log('Button click')),
            // con switchMap si el usuario hace click varias veces,
            // cancelamos la petición anterior y hacemos una nueva
            // switchMap(() =>
            // exhaustMap ignora nuevos clicks mientras la petición anterior no haya terminado
            exhaustMap(() => getUserById(id))
        );
        return data$;
    };

    const [data, error] = useObservable<User | null>(factory, null);

    return (
        <Card title="Fetch with Hooks (RxJS and React)">
            <button ref={buttonRef}>Get User ID 1</button>
            {data && <p>Received: {data.name} - {data.email}</p>}
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </Card>
    );
};
