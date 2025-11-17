import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GetData } from './get-data';

describe('GetData', () => {
    test('should render correctly', () => {
        render(<GetData />);
        const heading = screen.getByRole('heading', { name: /higher-order/i });
        expect(heading).toBeInTheDocument();
    });

    test('should fetch mock data correctly', async () => {
        render(<GetData />);
        const button = screen.getByRole('button', { name: /fetch data/i });
        await userEvent.click(button);
        const receivedText = await screen.findByText(/received:/i, {}, { timeout: 2000 });
        expect(receivedText).toBeInTheDocument();
        expect(receivedText).toHaveTextContent('Received: Data from API');
    })
});
