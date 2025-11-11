import { render, screen } from '@testing-library/react';
import { User } from './user.conditional';

describe('User component', () => {
    it('renders authenticated user', () => {
        // Test for authenticated user
        render(
            <User
                authenticated={true}
                level="admin"
                profileData={{ name: 'John Doe', email: 'john@example.com' }}
            />
        );
        // Add your assertions here
        const h3 = screen.getByRole('heading', { level: 3 });
        expect(h3).toHaveTextContent('Profile (admin)');
    });

    it('renders guest user', () => {
        // Test for guest user
        render(<User authenticated={false} level="guest" />);
        // Add your assertions here
        const paragraph = screen.getByText('Bienvenido como invitado');
        expect(paragraph).toBeInTheDocument();
    });
});
