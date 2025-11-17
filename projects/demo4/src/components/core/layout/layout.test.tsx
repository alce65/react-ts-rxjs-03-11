import { Layout } from './layout';
import { render, screen} from "@testing-library/react";


describe('Layout component', () => {
    test('should render correctly', () => {
        // Test implementation
        render(<Layout appTitle='Test'>Layout text</Layout>);
        const element = screen.getByText(/layout text/i);
        expect(element).toBeInTheDocument();
    });
});

