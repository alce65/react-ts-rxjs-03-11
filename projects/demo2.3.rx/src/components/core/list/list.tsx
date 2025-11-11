import React, { type JSX } from 'react';
import './list.css';

type Props<T> = {
    items: T[];
    renderItem?: (item: T) => React.ReactNode;
    keyExtractor?: (item: T, index: number) => string | number;
};

const hasID = (item: unknown): item is { id: string | number } => {
    if (item == null || typeof item !== 'object') return false;
    const id = (item as Record<string, unknown>)['id'];
    return typeof id === 'string' || typeof id === 'number';
};

export const List = <T,>({
    items,
    renderItem,
    keyExtractor,
}: Props<T>): JSX.Element => {
    const keyExtractorFn = (item: T, index: number): string | number => {
        return hasID(item) ? item.id : index;
    };

    // default renderItem y keyExtractor
    renderItem =
        renderItem ??
        ((item: T): React.ReactNode => item as unknown as React.ReactNode);
    keyExtractor = keyExtractor ?? keyExtractorFn;

    return (
        <ul>
            {items.map((item, index) => (
                <li key={keyExtractor(item, index)}>{renderItem(item)}</li>
            ))}
        </ul>
    );
};
