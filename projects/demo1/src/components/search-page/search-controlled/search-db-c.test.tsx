import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getData } from '@/components/services/data.service';
import { SearchControlled } from './search-db-c';
import type { Mock } from 'vitest';

vi.mock('@/components/services/data.service');
const mockData = [{ id: 1, title: 'sample data' }];

describe('SearchControlled', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });
    test('should search for data after 300ms of inactivity', async () => {
        (getData as Mock).mockResolvedValue(mockData);
        render(<SearchControlled />);
        const input = screen.getByRole('textbox');

        await userEvent.type(input, 't');
        await userEvent.type(input, 'e');
        await userEvent.type(input, 's');
        await userEvent.type(input, 't');
        await waitFor(() => {
            expect(getData).toHaveBeenCalledWith(`test`);
            expect(getData).toHaveBeenCalledTimes(1);
        });
    });

    test('should cancel request if previous request is still pending', async () => {
        vi.spyOn(AbortController.prototype, 'abort');
        (getData as Mock).mockImplementation(
            () => new Promise(() => undefined)
        );
        render(<SearchControlled />);
        const input = screen.getByRole('textbox');

        // Primera escritura
        await userEvent.type(input, 'test');

        // Esperar a que termine el debounce y se inicie la petición
        await waitFor(
            () => {
                expect(getData).toHaveBeenLastCalledWith(`test`);
                expect(getData).toHaveBeenCalledTimes(1);
            },
            {
                timeout: 400,
            }
        );

        // Verificar que aún NO se ha llamado abort (primera petición activa)
        expect(AbortController.prototype.abort).not.toHaveBeenCalled();

        // Segunda escritura MIENTRAS la primera petición está pendiente
        await userEvent.clear(input);
        await userEvent.type(input, 'to be cancelled');

        // Esperar a que el segundo debounce dispare la segunda petición
        await waitFor(async () => {
            expect(getData).toHaveBeenLastCalledWith(`to be cancelled`);
            expect(getData).toHaveBeenCalledTimes(2);
            expect(AbortController.prototype.abort).toHaveBeenCalled();
        });
    });

    test('should catch and log error if getData fails', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        (getData as Mock).mockRejectedValueOnce(new Error('Fetch error'));

        render(<SearchControlled />);
        const input = screen.getByRole('textbox');

        await userEvent.type(input, 'error');
        await waitFor(() => {
            expect(getData).toHaveBeenCalledWith('error');
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        consoleErrorSpy.mockRestore();
    });
});
