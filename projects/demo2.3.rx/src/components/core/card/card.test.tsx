import { Card } from './card';
import { render, screen} from "@testing-library/react";


describe('Card component', () => {
    test('should render correctly', () => {
        // Test implementation
        render(<Card>Card text</Card>);
        const element = screen.getByRole('region');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Card text');
        // Alternativa
        // const el = screen.getByText(/card text/i);
        // expect(el).toBeInTheDocument();
    });

    test('should render correctly with title', () => {
        // Test implementation
        render(<Card title="Card Title">Card text</Card>);
        const element = screen.getByRole('region');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Card text');
        const titleElement = screen.getByText('Card Title');
        expect(titleElement).toBeInTheDocument();
    });
});

