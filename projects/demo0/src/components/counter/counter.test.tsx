import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { Counter } from './counter';

describe('Counter', () => {
    beforeEach(() => {
        render(<Counter />);
    });

    test('renders correctly with initial value 0', () => {
        const button = screen.getByRole('button', {
            name: /count is 0/i,
        });
        const editText = screen.getByText(/Edit/i);
        expect(button).toBeInTheDocument();
        expect(editText).toBeInTheDocument();
    });

    test('increments count on button click (usando click)', () => {
        const button = screen.getByRole('button', {
            name: /count is 0/i,
        });
        act(() => {
            button.click();
        });
        expect(button).toHaveTextContent('count is 1');
    });

    test('increments count on button click (usando fireEvent)', () => {
        const button = screen.getByRole('button', {
            name: /count is 0/i,
        });
        fireEvent.click(button);
        expect(button).toHaveTextContent('count is 1');
    });
    test('increments count on button click (usando userEvent)', async () => {
        // const user = userEvent.setup()
        const button = screen.getByRole('button', {
            name: /count is 0/i,
        });
        await userEvent.click(button);
        expect(button).toHaveTextContent('count is 1');
    });
});
