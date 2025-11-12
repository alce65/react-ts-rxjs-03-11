import { render, screen } from '@testing-library/react';
import { UserLogged } from './user-load-rx';
import { fetchUserMock } from '../../../data/get-data.mock';
import type { Mock } from 'vitest';
import { delay, of } from 'rxjs';

vi.mock('../../../data/get-data.mock');

describe('UserLogged', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should render correctly', async () => {
        (fetchUserMock as Mock).mockImplementation(() =>
            of({ name: 'John Doe' }).pipe(
                // Simular un retardo en la respuesta
                delay(100)
            )
        );
        render(<UserLogged />);
        const heading = screen.getByRole('heading', { name: /user info/i });
        expect(heading).toBeInTheDocument();
        const loadingText = screen.getByText(/loading.../i);
        expect(loadingText).toBeInTheDocument();
        const userName = await screen.findByRole('heading', { level: 4 });
        expect(userName).toBeInTheDocument();
    });
});
