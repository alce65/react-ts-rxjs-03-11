import { getData } from './data-fetch';

describe('data-fetch module tests', () => {
    type Item = {
        id: number;
        name: string;
    };

    const mockData: Item[] = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
    ];

    describe('getData function', () => {
        const url = 'https://api.example.com/data';

        globalThis.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => [...mockData],
        } as Response);

        // vi.spyOn(globalThis, 'fetch').mockResolvedValue({
        //     ok: true,
        //     json: async () => [
        //         { id: 1, name: 'Item 1' },
        //         { id: 2, name: 'Item 2' }
        //     ]
        // } as Response);

        test('should get data successfully', () => {
            const data$ = getData<Item[]>(url)();
            expect(data$).toBeDefined();
            data$.subscribe({
                next: (data) => {
                    expect(data).toEqual(mockData);
                    expect(globalThis.fetch).toHaveBeenCalled();
                },
                error: (err) => {
                    console.error('Error occurred:', err);
                    expect(err).toBeUndefined(); // This should not be called
                },
            });
        });

        test('should handle HTTP ok false', () => {
            globalThis.fetch = vi.fn().mockResolvedValue({
                ok: false,
                status: 404,
            } as Response);
            const data$ = getData<Item[]>(url)();
            expect(data$).toBeDefined();
            data$.subscribe({
                error: (err) => {
                    expect(err.message).toBeDefined();
                    expect(err.status).toBe(404);
                }
            });
        });

        test('should handle HTTP error', () => {
            globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
            const data$ = getData<Item[]>(url)();
            expect(data$).toBeDefined();
            data$.subscribe({
                error: (err) => {
                    expect(err.message).toBe('A network error occurred');
                    expect(err.status).toBe(0);
                }
            });
        });
    });
});
