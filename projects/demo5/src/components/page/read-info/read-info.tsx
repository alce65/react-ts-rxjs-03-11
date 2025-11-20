import React from 'react';
import { infoActionService } from '../services/sharing-actions';
import { useObservable } from '@/hooks/use-observable.v4';
import { Card } from '@/components/core/card/card';

export const ReadInfo: React.FC = () => {
    const greeting$ = infoActionService.getObservable();

    const [greeting] = useObservable(greeting$, '');

    return (
        <Card title="Read Info">
            <p>Received info: {greeting}</p>
        </Card>
    );
};
