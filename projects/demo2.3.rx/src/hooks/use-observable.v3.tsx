import { useEffect, useMemo, useState } from 'react';
import type { Observable, Observer } from 'rxjs';

export const useSubscription = <T,>(
    source$: Observable<T> | (() => Observable<T> | null),
    observer: Partial<Observer<T>>
): void => {
    useEffect(() => {
        const obs$ = typeof source$ === 'function' ? source$() : source$;
        if (!obs$) return;
        const subscription = obs$.subscribe(observer);
        return (): void => subscription.unsubscribe();
    }, [source$, observer]);
};

export const useObservable = <T,>(
    source$: Observable<T> | (() => Observable<T> | null),
    initialValue: T | null = null
): T | null => {
    const [state, setState] = useState<T | null>(initialValue);

    const observer: Partial<Observer<T>> = useMemo(
        () => ({
            next: setState,
            error: (err): void => {
                console.error('Error occurred:', err);
                setState(initialValue);
            },
        }),
        [initialValue]
    );

    useSubscription<T>(source$, observer);
    return state;
};
