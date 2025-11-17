import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Fibonacci } from './fibonacci';


describe('Fibonacci', () => {
    test('should render correctly', () => {
        render(<Fibonacci />);
        const heading = screen.getByRole('heading', {
            name: /fibonacci sequences/i,
        });
        expect(heading).toBeInTheDocument();
    });

    test('should return if the input is NOT valid', async () => {
        render(<Fibonacci />);
        const inputNumber = screen.getByRole('textbox');
        await userEvent.type(inputNumber, '-1');
        await waitFor(() => {
            const output = screen.getByRole('status');
            expect(output).toHaveTextContent(/^$/);
        });
    });

    test('should display fibonacci sequence of n number', async () => {
        render(<Fibonacci />);
        const checkOptions = screen.getByRole('radio', { name: /items/i });
        await userEvent.click(checkOptions);
        const inputNumber = screen.getByRole('textbox');
        await userEvent.type(inputNumber, '10');

        await waitFor(() => {
            const output = screen.getByRole('status');
            expect(output).toHaveTextContent(/^0, 1, 1, 2, 3, 5/);
        });
    });

    test('should calculate fibonacci sequence with a limit', async () => {
        render(<Fibonacci />);
        const checkOptions = screen.getByRole('radio', { name: /limit/i });
        await userEvent.click(checkOptions);
        const inputNumber = screen.getByRole('textbox');
        await userEvent.type(inputNumber, '10');

        await waitFor(() => {
            const output = screen.getByRole('status');
            expect(output).toHaveTextContent(/^0, 1, 1, 2, 3, 5/);
        });
    });
});
