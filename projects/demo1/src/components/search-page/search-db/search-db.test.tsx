import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { Mock } from 'vitest';
import { SearchDb } from './search-db';
import { getData } from '@/components/services/data.service';

vi.mock('@/components/services/data.service');
const mockData = [{ id: 1, title: 'sample data' }];

describe('SearchDb', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });
    test('should search for data after 300ms of inactivity', async () => {
        (getData as Mock).mockResolvedValue(mockData);
        render(<SearchDb />);
        const input = screen.getByRole('textbox');

        await userEvent.type(input, 't');
        await userEvent.type(input, 'e');
        await userEvent.type(input, 's');
        await userEvent.type(input, 't');
        await waitFor(() => {
            expect(getData).toHaveBeenNthCalledWith(1, `test`)
            expect(getData).toHaveBeenCalledTimes(1)
        });
    });

    test('should catch and log error if getData fails', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        (getData as Mock).mockRejectedValueOnce(new Error('Fetch error'));

        render(<SearchDb />);
        const input = screen.getByRole('textbox');

        await userEvent.type(input, 'error');
        await waitFor(() => {
            expect(getData).toHaveBeenCalledWith('error')
            expect(consoleErrorSpy).toHaveBeenCalled()
        });
    });
});
