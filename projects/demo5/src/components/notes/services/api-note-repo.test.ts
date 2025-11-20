import type { Mock } from 'vitest';
import { ApiNoteRepository } from './api-note-repo';
import { HttpError } from '../types/http-error';

const mockData = [{ id: 1, title: 'sample data' }];

globalThis.fetch = vi.fn().mockResolvedValueOnce({
    ok: true,
    json: vi.fn().mockResolvedValue([...mockData]),
});

const url = 'https://api.example.com/';
const repo = new ApiNoteRepository(url);

describe('data.service', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should fetch data based on query', () => {
        const results$ = repo.getAll();
        results$.subscribe({
            next: (results) => {
                expect(fetch).toHaveBeenCalled();
                expect(results).toEqual(mockData);
            },
        });
    });

    test('should throw an error if fetch fetch fails', async () => {
        (fetch as Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error',
        });
        const results$ = repo.getAll();
        results$.subscribe({
            error: (err) => {
                expect(fetch).toHaveBeenCalled();
                expect(err).toBeInstanceOf(HttpError);
                expect(err.status).toBe(500);
                expect(err.statusText).toBe('Internal Server Error');
            },
        });
    });

    test('should throw an error if fetch fails', async () => {
        (fetch as Mock).mockRejectedValueOnce(new Error('Error fetching data'));
        const results$ = repo.getAll();
        results$.subscribe({
            error: (err) => {
                expect(fetch).toHaveBeenCalled();
                expect(err).toBeInstanceOf(HttpError);
                expect(err.status).toBe(0);
                expect(err.message).toBe('Unknown fetch error');
            },
        });
    });
});
