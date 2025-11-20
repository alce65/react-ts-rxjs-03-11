import React, { useMemo } from 'react';
import { scan, Subject } from 'rxjs';
import { Card } from '@/components/core/card/card';
import { useObservable } from '@/hooks/use-observable.v4';

const ACTIONS = ['INCREMENT', 'DECREMENT', 'RESET'] as const;
type ActionType = (typeof ACTIONS)[number];

const reducers: Record<ActionType, (sum: number) => number> = {
    INCREMENT: (sum: number) => sum + 1,
    DECREMENT: (sum: number) => sum - 1,
    RESET: () => 0,
};

const isActionType = (value: string): value is ActionType =>
    (ACTIONS as readonly string[]).includes(value);

export const Counter3Buttons: React.FC = () => {
    const action$ = useMemo(() => new Subject<ActionType>(), []);
    const source$ = useMemo(
        () => action$.pipe(scan((sum, action) => reducers[action](sum), 0)),
        [action$]
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const action = event.currentTarget.getAttribute('data-action');
        if (!action || !isActionType(action)) return;
        action$?.next(action);
    };

    const [count] = useObservable(source$);

    return (
        <Card>
            <p>
                <button
                    onClick={handleClick}
                    title="Decrement"
                    data-action={'DECREMENT'}
                >
                    ➖
                </button>
                <span className="count-value">count is {count}</span>
                <button
                    onClick={handleClick}
                    title="Increment"
                    data-action={'INCREMENT'}
                >
                    ➕
                </button>
                <button
                    onClick={handleClick}
                    title="Reset"
                    data-action={'RESET'}
                >
                    🔄
                </button>
            </p>
        </Card>
    );
};
