import { Footer } from './footer';
import { render, screen} from "@testing-library/react";


describe('Footer component', () => {
    test('should render correctly', () => {
        // Test implementation
        render(<Footer />);
        const element = screen.getByRole('contentinfo');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Vite and React');
    });
});

