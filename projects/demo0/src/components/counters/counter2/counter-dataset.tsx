// import { BaseSyntheticEvent } from "react";
import { type SyntheticEvent, useState, type JSX } from 'react';
import { Card } from '../../core/card/card';
import './counter.css';

// 1. Tipado de eventos con SyntheticEvent
// Acceso a dataset y currentTarget

type Props = {
    initialCount: number;
};
export const CounterWithEvent1: React.FC<Props> = ({ initialCount }) => {
    const [count, setCount] = useState<number>(initialCount);

    const handleClick = (event: SyntheticEvent<HTMLButtonElement>): void => {
        const element = event.currentTarget;

        const { value } = element.dataset; //as unknown as { value: string };
        setCount(count + Number(value));
    };

    return (
        <Card>
            <p>
                <button onClick={handleClick} data-value={-1}>
                    ➖
                </button>
                <span className="count-value">count is {count}</span>
                <button onClick={handleClick} data-value={1}>
                    ➕
                </button>
            </p>
        </Card>
    );
};

// 2. Tipado de eventos más específico, con React.PointerEvent
// Mejora del tipado del dataset
// Acceso a target o currentTarget

export const CounterWithEvent2 = ({ initialCount }: Props): JSX.Element => {
    const [count, setCount] = useState<number>(initialCount);

    // const handleClick = (
    //     event: SyntheticEvent<HTMLButtonElement>
    // ) => {
    // (property) React.BaseSyntheticEvent
    // <PointerEvent, EventTarget & HTMLButtonElement, EventTarget>
    // .target: EventTarget
    //const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const handleClick = (
        event: React.PointerEvent<HTMLButtonElement>
    ): void => {
        // const element  = event.currentTarget;
        const element = event.target as HTMLButtonElement;
        //  element: EventTarget
        const { value } = element.dataset as DOMStringMap;
        setCount(count + Number(value));
    };

    return (
        <Card>
            <p>
                <button onClick={handleClick} data-value={-1}>
                    ➖
                </button>
                <span className="count-value">count is {count}</span>
                <button onClick={handleClick} data-value={1}>
                    ➕
                </button>
            </p>
        </Card>
    );
};

// 3. Tipado de eventos con React.PointerEvent
// Versión final con currentTarget

export const CounterWithEvent3: React.FC<Props> = ({ initialCount }) => {
    const [count, setCount] = useState<number>(initialCount);

    const handleClick = (
        event: React.PointerEvent<HTMLButtonElement>
    ): void => {
        const element = event.currentTarget;
        const { value } = element.dataset as DOMStringMap;
        setCount(count + Number(value));
    };

    return (
        <Card>
            <p>
                <button onClick={handleClick} data-value={-1}>
                    ➖
                </button>
                <span className="count-value">count is {count}</span>
                <button onClick={handleClick} data-value={1}>
                    ➕
                </button>
            </p>
        </Card>
    );
};

// 4. Tipado de la función completa como React.MouseEventHandler

export const CounterWithEvent4: React.FC<Props> = ({ initialCount }) => {
    const [count, setCount] = useState<number>(initialCount);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const element = event.currentTarget;
        const { value } = element.dataset as DOMStringMap;
        setCount(count + Number(value));
    };

    return (
        <Card>
            <p>
                <button onClick={handleClick} data-value={-1}>
                    ➖
                </button>
                <span className="count-value">count is {count}</span>
                <button onClick={handleClick} data-value={1}>
                    ➕
                </button>
            </p>
        </Card>
    );
};
