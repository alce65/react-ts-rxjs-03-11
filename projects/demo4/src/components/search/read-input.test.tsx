import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReadInput } from './read-input';

describe('ReadInput Component', () => {
    test('should render input and display typed value', async () => {
        render(<ReadInput />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        // Valor inicial
        expect(inputElement).toHaveValue('');
        // Simular escritura
        await userEvent.type(inputElement, 'Hello');
        expect(inputElement).toHaveValue('Hello');
        // Verificar que el valor se muestra en el output
        const outputElement = await screen.findByText(/hello/i);
        expect(outputElement).toHaveTextContent(/hello/i);
    });
});
