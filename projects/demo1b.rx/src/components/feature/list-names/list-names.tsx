import { Card } from '@/components/core/card/card';
import React, { useEffect, useState } from 'react';
import { Observable, of } from 'rxjs';
import './list-names.css';

const NAMES = ['Ana', 'Luis', 'Carlos', 'María', 'Juan'];

type Props = {
    names$?: Observable<string[]>;
}
const NAMES$ = of(NAMES);

export const ListNames: React.FC<Props> = ({ names$ = NAMES$ }) => {
    const [names, setNames] = useState<string[]>([]);
    useEffect(() => {
        console.log('Use effect')
        const subscription = names$.subscribe(setNames);
        return (): void => subscription.unsubscribe();
    }, [names$]);

    return (
        <Card title="Names List from Observable">
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </Card>
    );
};
