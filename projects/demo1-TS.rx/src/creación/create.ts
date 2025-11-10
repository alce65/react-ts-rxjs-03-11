// Operadores de creación

type Action = {
    type: 'INCREMENT' | 'DECREMENT';
    payload?: number;
} & {
    type: 'RESET';
};

// Operador of

import { Observable, of } from 'rxjs';

{
    const source$ = of(1, 2, 3, 4, 5);
    source$.subscribe(console.log);
}

{
    const source$: Observable<Action> = of(
        { type: 'INCREMENT', payload: 1 } as Action,
        { type: 'RESET' } as Action,
        { type: 'INCREMENT', payload: 2 } as Action,
        { type: 'DECREMENT', payload: 1 } as Action
    );
    source$.subscribe((value) => console.log('Demo1: Result with of ', value));
}
{
    const source$ = of([1, 2, 3, 4, 5]);
    source$.subscribe(console.log);
}

// Operador from (usa iterables, promesas, etc.)

import { from } from 'rxjs';

{
    const source$ = from([1, 2, 3, 4, 5]);
    source$.subscribe(console.log);
}
{
    const example$: Observable<Action> = from([
        { type: 'INCREMENT', payload: 1 } as Action,
        { type: 'RESET' } as Action,
        { type: 'INCREMENT', payload: 2 } as Action,
        { type: 'DECREMENT', payload: 1 } as Action,
    ]);
    example$.subscribe((value) =>
        console.log('Demo2: Result with from ', value)
    );
}
{
    function* values(): Generator<number> {
        yield 1;
        yield 2;
        yield 3;
        return;
    }

    const example$ = from(values());
    example$.subscribe((value) =>
        console.log('Demo2: Result with from ', value)
    );
}
{
     const example$ = from(Promise.resolve("Promesa resuelta"));
     example$.subscribe((value) =>
         console.log('Demo2: Result with from ', value)
     );
}
