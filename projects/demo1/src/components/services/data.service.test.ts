import type { Mock } from 'vitest';
import { getData, getDataThen } from './data.service';
describe('Data Service', () => {
    // Tests for getData function would go here

    const mockData = [{ id: 1 }];

    beforeEach(() => {
        // Alternativa
        // vi.spyOn(globalThis, 'fetch').mockResolvedValue({
        //     ok: true,
        //     json: () => Promise.resolve([{ id: 1 }]),
        // } as Response);
    });

    test('should fetch data successfully', async () => {
        globalThis.fetch = vi.fn().mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockData),
        } as Response);
        const data = await getData('test-query');
        expect(data).toEqual(mockData);
        expect(globalThis.fetch).toHaveBeenCalledWith(
            'https://api.example.com/test-query'
        );
    });

    test('should throw an error for non-OK response', async () => {
        (fetch as Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
            statusText: 'Not Found',
        } as Response);
        await expect(getData('test-query')).rejects.toThrow(
            'Error fetching data: 404 Not Found'
        );
    });

    test('should throw an error if fetch fails', async () => {
        (fetch as Mock).mockRejectedValue(new Error('Network error'));

        await expect(getData('test')).rejects.toThrow('Network error');
    });

    afterEach(() => {
        vi.clearAllMocks();
    });
});


describe('Data Service with Then', () => {
    // Tests for getData function would go here

    const mockData = [{ id: 1 }];

    beforeEach(() => {
        // Alternativa
        // vi.spyOn(globalThis, 'fetch').mockResolvedValue({
        //     ok: true,
        //     json: () => Promise.resolve([{ id: 1 }]),
        // } as Response);
    });

    test('should fetch data successfully', async () => {
        globalThis.fetch = vi.fn().mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockData),
        } as Response);
        const data = await getDataThen('test-query');
        expect(data).toEqual(mockData);
        expect(globalThis.fetch).toHaveBeenCalledWith(
            'https://api.example.com/test-query'
        );
    });

    test('should throw an error for non-OK response', async () => {
        (fetch as Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
            statusText: 'Not Found',
        } as Response);
        await expect(getDataThen('test-query')).rejects.toThrow(
            'Error fetching data: 404 Not Found'
        );
    });

    test('should throw an error if fetch fails', async () => {
        (fetch as Mock).mockRejectedValue(new Error('Network error'));

        await expect(getDataThen('test')).rejects.toThrow('Network error');
    });

    afterEach(() => {
        vi.clearAllMocks();
    });
});
