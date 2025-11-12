import { useEffect, useState } from 'react';
import type { Observable, Observer } from 'rxjs';

export const useSubscription = <T,>(
    source$: Observable<T>,
    observer: Partial<Observer<T>>
): void => {
    useEffect(() => {
        const subscription = source$.subscribe(observer);
        return (): void => subscription.unsubscribe();
    }, [source$, observer]);
};

export const useObservable = <T,>(
    source$: Observable<T>,
    initialValue: T | null = null
): T | null => {
    const [state, setState] = useState<T | null>(initialValue);

    const observer: Partial<Observer<T>> = {
        next: setState,
        error: (err) => {
            console.error('Error occurred:', err);
            setState(initialValue);
        },
    };
    useSubscription<T>(source$, observer);
    return state;
};
