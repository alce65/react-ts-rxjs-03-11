import { Header } from './header';
import { render, screen} from "@testing-library/react";


describe('Header component', () => {
    test('should render correctly', () => {
        const mockTitle = 'Test title'; 
        render(<Header appTitle={mockTitle} />);
        const element = screen.getByRole('heading', { level: 1 });
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(mockTitle);
    });
});

