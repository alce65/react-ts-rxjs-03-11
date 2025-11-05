import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RegisterForm } from './register.form';

const mockRegisterUser = vi.fn(async () => undefined);

const mockData = {
    userName: 'John Doe',
    email: 'john@example.com',
    passwd: 'password',
    isOkConditions: true,
    turn: 'M',
    course: 'R',
};

describe('RegisterForm', () => {
    beforeEach(() => {
        render(<RegisterForm registerUser={mockRegisterUser} />);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should render correctly', async () => {
        const form = screen.getByRole('form', {
            name: /register-form/i,
        });
        expect(form).toBeInTheDocument();
    });

    test('should submit form with correct data', async () => {
        const userNameInput = screen.getByRole('textbox', { name: /name/i });
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwdInput = screen.getByLabelText(/password/i);
        const isOkConditionsInput = screen.getByRole('checkbox', {
            name: /conditions/i,
        });
        const turnInput = screen.getByRole('radio', { name: /turn/i });
        const courseInput = screen.getByRole('combobox', { name: /course/i });

        await userEvent.type(userNameInput, mockData.userName);
        await userEvent.type(emailInput, mockData.email);
        await userEvent.type(passwdInput, mockData.passwd);
        await userEvent.click(isOkConditionsInput);
        await userEvent.click(turnInput);
        await userEvent.selectOptions(courseInput, mockData.course);

        await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

        expect(mockRegisterUser).toHaveBeenCalledWith(mockData);
    }, 10_000);
});
