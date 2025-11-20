
import { Card } from '@/components/core/card/card';
import React from 'react';
import { infoActionService, clicActionService } from '../services/sharing-actions';

export const SendInfo: React.FC = () => {

    const message = "Hola desde SendInfo";
    // const action$ = useMemo(() => new Subject<number>(), []);

    // const source$ = useMemo(
    //     () =>
    //         action$.pipe(
    //             scan((acc, curr) => acc + curr, 0),
    //             tap((value) => clicActionService.setSubject(value)) // next(1)),
    //         ),
    //     [action$]
    // );

    // const [count] = useObservable(source$, 0);

    const handleClick = (): void => {
        //action$.next(1);
         infoActionService.setSubject(message)
    };

    const handleCounter = (): void => {
         clicActionService.setSubject(1)
    }

    return (
        <Card title="Send Info">
            <button onClick={handleClick}>Saludar</button>
            <button onClick={() => infoActionService.setSubject('')}>Borrar Saludo</button>
            <button onClick={handleCounter}>Incrementar contador</button>
        </Card>
    );
};
