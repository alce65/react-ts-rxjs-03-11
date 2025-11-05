import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './login.form';
import type { Login } from '../../types/user';

describe('Login', () => {
    const mockManageStates = vi.fn(async () => undefined);

    const dataMock: Login = {
        email: 'test@example.com',
        passwd: 'password',
        rememberMe: true,
    };

    beforeEach(() => {
        render(<LoginForm manageStates={mockManageStates} />);
    });

    test('should render correctly', () => {
        expect(screen.getByText(/login/i)).toBeInTheDocument();
    });

    test('should show email error when email is empty', async () => {
        const emailInput = screen.getByLabelText(/email/i);
        const submitButton = screen.getByRole('button', { name: /enviar/i });
        await userEvent.clear(emailInput);
        expect(emailInput).toHaveValue('');
        await userEvent.click(submitButton);
        expect(emailInput).toBeInvalid();
    });

    test('should show password error when password is empty', async () => {
        const passwordInput = screen.getByPlaceholderText(/password/i);
        const submitButton = screen.getByRole('button', { name: /enviar/i });

        await userEvent.clear(passwordInput);
        expect(passwordInput).toHaveValue('');
        await userEvent.click(submitButton);
        expect(passwordInput).toBeInvalid();
    });

    test('should submit form with valid data', async () => {
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByPlaceholderText(/password/i);
        const rememberMeCheckbox = screen.getByLabelText(/rememberMe/i);
        const submitButton = screen.getByRole('button', { name: /enviar/i });

        await userEvent.type(emailInput, dataMock.email);
        await userEvent.type(passwordInput, dataMock.passwd);
        await userEvent.click(rememberMeCheckbox);
        await userEvent.click(submitButton);

        expect(mockManageStates).toHaveBeenCalledWith(dataMock);
        expect(emailInput).toHaveValue('');
        expect(passwordInput).toHaveValue('');
        expect(rememberMeCheckbox).not.toBeChecked();
    });
});
