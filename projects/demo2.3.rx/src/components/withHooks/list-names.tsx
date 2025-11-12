import { Card } from '../core/card/card';
import { useObservable } from '@/hooks/use-observable.v2';
import { List } from '../core/list/list';
import { getNames } from '@/services/names.service';

export const ListNames: React.FC = () => {
    const names$ = getNames();
    const names = useObservable<string[]>(names$, []);
    if (!names || names.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Card title="Names List from Observable">
            <List items={names} />
        </Card>
    );
};
