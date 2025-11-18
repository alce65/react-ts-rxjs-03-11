import { useObservable } from '@/hooks/use-observable.v4';
import { getUserData } from '@/services/user-data-fetch';
// import type { HttpError } from '@/types/http-error';
import React from 'react';
import { Card } from '../core/card/card';
import { List } from '../core/list/list';
import type { User } from '@/types/user';

export const GetUsers: React.FC = () => {
    const user$ = getUserData();

    // user$.subscribe({
    //     next: (data) => console.log('Data received in component:', data),
    //     error: (err: HttpError) => console.error('Error in component:',
    //         err.message,
    //         'Status:', err.status,
    //         'Status Text:',  err.statusText
    //     ),
    // });

    const [users, error] = useObservable(user$);
    if (!users && !error) {
        return <div>Loading user data...</div>;
    }
    if (error) {
        return <div>Error loading user data: {error.message}</div>;
    }

    return (
        <Card title="Get Data with fromFetch">
            <List
                items={users as User[]}
                renderItem={(user) => (
                    <div>
                        {user.id} - {user.name} ({user.email})
                    </div>
                )}
            />
        </Card>
    );
};
