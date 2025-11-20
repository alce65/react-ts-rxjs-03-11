import { scan, Subject } from 'rxjs';
import { Card } from '@/components/core/card/card';
import React, { useMemo } from 'react';
import { useObservable } from '@/hooks/use-observable.v4';

export const CounterClicks: React.FC = () => {
    const action$ = useMemo(() => new Subject<number>(), []);

    const source$ = useMemo(
        () => action$.pipe(scan((acc, curr) => acc + curr, 0)),
        [action$]
    );

    const [count] = useObservable(source$, 0);

    return (
        <Card title="Counter Clicks">
            <button onClick={() => action$.next(1)}>
                Click count: {count}
            </button>
        </Card>
    );
};
