import { fireEvent, render, screen, act } from '@testing-library/react';
import { ClicksCounter } from './clicks-counter';
import userEvent from '@testing-library/user-event';

describe('ClicksCounter', () => {
    test('should render correctly', () => {
        render(<ClicksCounter />);
        const heading = screen.getByRole('heading', { name: /counter/i });
        expect(heading).toBeInTheDocument();
    });

    test('should increment count on button click', async () => {
        render(<ClicksCounter />);
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
