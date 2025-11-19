import { of } from 'rxjs';
import { act, render, screen } from '@testing-library/react';

import type { Mock } from 'vitest';
import { GetUserById } from './get-user-button';
import { getUserById } from '@/services/user-data-fetch';

vi.mock('@/services/user-data-fetch');
const mockedGetUserById = getUserById as Mock;

const mockData = {
    id: 1,
    name: 'test title',
    email: 'test email'
};

describe('Todo Fetch with Hook', () => {
    test('should call getData with correct URL', () => {
        mockedGetUserById.mockReturnValue(of(mockData));
        render(<GetUserById />);
        const eButton = screen.getByRole('button', { name: 'Get User ID 1' });
        act(() => {
            eButton.click();
        });
        expect(getUserById).toHaveBeenCalledWith('1');
        expect(screen.getByText(/test title/i)).toBeInTheDocument();
    });
});
