import { fireEvent, render, screen, act } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { CounterClicks } from './counter-clicks';

describe('CounterClicks', () => {
    test('should render correctly', () => {
        render(<CounterClicks />);
        const heading = screen.getByRole('heading', { name: /counter/i });
        expect(heading).toBeInTheDocument();
    });

    test('should increment count on button click', async () => {
        render(<CounterClicks />);
        const button = screen.getByRole('button', { name: /click count/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click count: 0');
        // Simular clicks y verificar el conteo
        act(() => {
            button.click();
        });
        expect(button).toHaveTextContent('Click count: 1');
        fireEvent.click(button);
        await userEvent.click(button);
        expect(button).toHaveTextContent('Click count: 3');
    });
});
