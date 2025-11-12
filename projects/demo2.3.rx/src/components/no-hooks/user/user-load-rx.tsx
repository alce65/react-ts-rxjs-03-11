import { useState, useEffect } from 'react';
import { tap } from 'rxjs';
import { Card } from '../../core/card/card';
import { fetchUserMock } from '@/data/get-data.mock';
import type { User } from '@/data/user';

export const UserLogged: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetchUserMock(1000, false)
            .pipe(tap(() => setLoading(true)))
            .subscribe({
                next: (userData) => {
                    console.log('User data fetched:', userData);
                    setUser(userData);
                    setLoading(false);
                },
                error: (err) => {
                    setError(err);
                    setLoading(false);
                },
            });
    }, []);

    return (
        <Card title="User Info">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {user && (
                <div>
                    <h4>{user.name}</h4>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                </div>
            )}
        </Card>
    );
};
