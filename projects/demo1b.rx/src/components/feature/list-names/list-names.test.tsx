import { render, screen } from '@testing-library/react';
import { ListNames } from './list-names';
import { of } from 'rxjs';

const mockNames$ = of(['Pepe', 'Rosa', 'Juan', 'Diana']);

describe('ListNames component', () => {
    // La lista es fija en el componentes
    // por lo que se testa con los valores esperados

    test('renders names from observable', () => {
        // Test implementation
        render(<ListNames names$={mockNames$} />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(4);
        expect(listItems[0]).toHaveTextContent('Pepe');
        expect(listItems[1]).toHaveTextContent('Rosa');
        expect(listItems[2]).toHaveTextContent('Juan');
        expect(listItems[3]).toHaveTextContent('Diana');
    });
});
