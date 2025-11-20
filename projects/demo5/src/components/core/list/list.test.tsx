import { render, screen } from '@testing-library/react';
import { List } from './list';
import type { JSX } from 'react';

describe('list component', () => {
    test('renders list items with default renderItem and keyExtractor', () => {
        const items = ['Item 1', 'Item 2', 'Item 3'];

        render(<List items={items} />);

        items.forEach((item) => {
            const listItem = screen.getByText(item);
            expect(listItem).toBeInTheDocument();
        });
    });

    test('renders list items with custom renderItem', () => {
        type Item = { id: number; label: string };
        const items: Item[] = [
            { id: 1, label: 'Custom Item 1' },
            { id: 2, label: 'Custom Item 2' },
        ];

        const customRenderItem = (item: Item): JSX.Element => (
            <span>{item.label}</span>
        );


        render(
            <List
                items={items}
                renderItem={customRenderItem}
            />
        );

        items.forEach((item) => {
            const listItem = screen.getByText(item.label);
            expect(listItem).toBeInTheDocument();
        });
    });

    test('renders list items with custom renderItem and keyExtractor', () => {
        type Item = { id: number; label: string };
        const items: Item[] = [
            { id: 1, label: 'Custom Item 1' },
            { id: 2, label: 'Custom Item 2' },
        ];

        const customRenderItem = (item: Item): JSX.Element => (
            <span>{item.label}</span>
        );
        const customKeyExtractor = (item: Item): number => item.id;

        render(
            <List
                items={items}
                renderItem={customRenderItem}
                keyExtractor={customKeyExtractor}
            />
        );

        items.forEach((item) => {
            const listItem = screen.getByText(item.label);
            expect(listItem).toBeInTheDocument();
        });
    });
});
