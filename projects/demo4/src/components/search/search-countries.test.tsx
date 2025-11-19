import {of} from 'rxjs';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { searchCountry } from '../../services/country-data-fetch';
import { SearchCountries } from '@/components/search/search-countries';

import type { Mock } from 'vitest';

vi.mock('../../services/country-data-fetch');
const mockedSearchCountry = searchCountry as Mock;

const mockCountries = [
    {
        name: { common: 'Spain', official: 'Kingdom of Spain' },
        capital: ['Madrid'],
    },
];

describe('ReadInput Component', () => {
    mockedSearchCountry.mockReturnValue(of(mockCountries));
    test('should render input and display typed value', async () => {
        render(<SearchCountries />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        // Valor inicial
        expect(inputElement).toHaveValue('');
        // Simular escritura
        await userEvent.type(inputElement, 'spain');
        expect(inputElement).toHaveValue('spain');
        // Verificar que el valor se muestra en el output
        // Transcurrido el tiempo del debounce
        await waitFor(
            () => {
                expect(searchCountry).toHaveBeenCalled();
                expect(screen.getByText(/Spain - Capital: Madrid/i)).toBeInTheDocument();
                expect(screen.getByText(/Kingdom of Spain/i)).toBeInTheDocument();
            },
            { timeout: 540 }
        );
    });
});
