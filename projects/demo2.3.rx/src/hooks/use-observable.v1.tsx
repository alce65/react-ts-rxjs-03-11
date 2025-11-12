import { useEffect, useState } from 'react';
import type { Observable } from 'rxjs';

export const useObservable = <T,>(
    source$: Observable<T>, 
    initialValue: T | null = null): T | null => {
    
    const [state, setState] = useState<T | null>(initialValue);

    useEffect(() => {
        const subscription = source$.subscribe({
            next: setState,
            error: (err) => {
                console.error('Error occurred:', err);
                setState(initialValue);
            },
        });
        return (): void => subscription.unsubscribe();
    }, [source$, initialValue]);


    return state;
};
