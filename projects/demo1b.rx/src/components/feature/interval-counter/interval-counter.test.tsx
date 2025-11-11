import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntervalCounter1 } from './interval-counter';

describe('IntervalCounter1', () => {
    beforeEach(() => {
        render(<IntervalCounter1 />);
    });

    test('should render correctly', () => {
        const heading = screen.getByRole('heading', {
            name: /interval counter/i,
        });
        expect(heading).toBeInTheDocument();
    });

    test('should display initial count', () => {
        const output = screen.getByRole('status');
        expect(output).toHaveTextContent(/^0$/);
    });

    test('should increment count', async () => {
        const button = screen.getByRole('button', { name: /start/i });
        await userEvent.click(button);
        const output = screen.getByRole('status');

        await waitFor(
            () => {
                expect(output).toHaveTextContent(/^1$/);
            },
            { timeout: 520 }
        );
    });
});

describe('IntervalCounter1 deterministic tests', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    test('should increment count after start click', async () => {
        render(<IntervalCounter1 />);
        const button = screen.getByRole('button', { name: /start/i });

        await act(async () => {
            button.click();
            // Avanzamos el reloj para que interval(100) emita al menos 1 vez
            vi.advanceTimersByTime(520);
        });
        const output = screen.getByRole('status');
        // Option 1: buscar el span con la clase .counter
        // const output = screen.getByText(
        //     (_, node) => node?.classList?.contains('counter') ?? false
        // );
        expect(output).not.toHaveTextContent(/^0$/);
    });

    test.skip('should increment count after start click', async () => {
        // No llega a funcionar
        // TODO revisarla

        const newUserEvent = userEvent.setup({
            advanceTimers: vi.advanceTimersByTime, // hace que userEvent use tus fake timers
        });

        render(<IntervalCounter1 />);
        const button = screen.getByRole('button', { name: /start/i });

        newUserEvent.click(button);

        await act(async () => {
            // Avanzamos el reloj para que interval(100) emita al menos 1 vez
            vi.advanceTimersByTime(120);
        });

        const output = screen.getByRole('status');
        // Option 1: buscar el span con la clase .counter
        // const output = screen.getByText(
        //     (_, node) => node?.classList?.contains('counter') ?? false
        // );
        expect(output).not.toHaveTextContent(/^0$/);
    });
});

// Detalles extra a tener en cuenta

// Cada click en Start crea una nueva suscripción al intervalo;
// podrías ver incrementos más rápidos si haces múltiples clicks
// (no es necesario cambiar el componente ahora, pero tenlo presente al escribir tests).
// Si añades un cleanup en el effect (unsubscribe on unmount),
// evitarás intervalos colgando entre tests,
// pero para este caso bastan los fake timers.
