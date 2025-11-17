import { act, render, screen } from '@testing-library/react';
import { IntervalCounter4 } from './counter4';


describe('IntervalCounter4', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    test('should render correctly', () => {
        render(<IntervalCounter4 />);
        const heading = screen.getByRole('heading', { name: /3 buttons/i });
        expect(heading).toBeInTheDocument();
    });
    test('should increment count after start click', async () => {
        render(<IntervalCounter4 />);
        const buttonStart = screen.getByRole('button', { name: /start/i });

        await act(async () => {
            buttonStart.click();
            // Avanzamos el reloj para que interval(100) emita al menos 1 vez
            vi.advanceTimersByTime(1200);
        });
        const output = screen.getByRole('status');
        expect(output).toHaveTextContent(/^12$/);
    });

    test('should pause count after pause click', async () => {
        render(<IntervalCounter4 />);
        const buttonStart = screen.getByRole('button', { name: /start/i });
        const buttonPause = screen.getByRole('button', { name: /pause/i });

        await act(async () => {
            buttonStart.click();
            // Avanzamos el reloj para que interval(100) emita al menos 1 vez
            vi.advanceTimersByTime(1200);
        });

        const output = screen.getByRole('status');
        expect(output).toHaveTextContent(/^12$/);

        await act(async () => {
            buttonPause.click();
            // Avanzamos el reloj para que interval(100) emita al menos 1 vez
            vi.advanceTimersByTime(1200);
        });
        expect(output).toHaveTextContent(/^12$/);
    });

    test('should reset count after stop click', async () => {
        render(<IntervalCounter4 />);
        const buttonStart = screen.getByRole('button', { name: /start/i });
        const buttonStop = screen.getByRole('button', { name: /stop/i });
        const output = screen.getByRole('status');

        await act(async () => {
            buttonStart.click();
            // Avanzamos el reloj para que interval(100) emita al menos 1 vez
            vi.advanceTimersByTime(1200);
        });
        expect(output).toHaveTextContent(/^12$/);

        await act(async () => {
            buttonStop.click();
            // Avanzamos el reloj para que interval(100) emita al menos 1 vez
            vi.advanceTimersByTime(120);
        });

        expect(output).toHaveTextContent(/^0$/);
    });
});
