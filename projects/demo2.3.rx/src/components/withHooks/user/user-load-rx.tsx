import { Card } from '../../core/card/card';
import { useUserLogged } from '@/hooks/use-user-logged';

export const UserLogged: React.FC = () => {
    const { user, loading, error } = useUserLogged();
    
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
