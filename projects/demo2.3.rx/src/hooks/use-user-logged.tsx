import { fetchUserMock } from '@/data/get-data.mock';
import type { User } from '@/data/user';
import { useEffect, useState } from 'react';
import { tap, type Observer } from 'rxjs';

type UseUserLogged = {
    user: User | null;
    loading: boolean;
    error: Error | null;
};

export const useUserLogged = (): UseUserLogged => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        console.log('Use effect');
        
        const observer: Partial<Observer<User>> = {
            next: (userData) => {
                console.log('User data fetched:', userData);
                setUser(userData);
                setLoading(false);
            },
            error: (err) => {
                setError(err);
                setLoading(false);
            },
        };

        fetchUserMock(2000, false)
            .pipe(tap(() => setLoading(true)))
            .subscribe(observer);
    }, []);

    return { user, loading, error };
};
