import type React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useToggle } from './use-toggle';

describe('useToggle', () => {
    const TestHookComponent: React.FC = () => {
        const [state, toggle] = useToggle();

        console.log(state, toggle);

        return (
            <>
                <h3>Test Hook</h3>
                <p>
                    {state ? 'On' : 'Off'}
                    <span> </span>
                    <button onClick={toggle}>Toggle</button>
                </p>
            </>
        );
    };

    test('should render correctly', () => {
        render(<TestHookComponent />);
        const heading = screen.getByRole('heading', { name: /test hook/i });
        expect(heading).toBeInTheDocument();
    });

    test('should toggle state', async () => {
        render(<TestHookComponent />);
        const button = screen.getByRole('button', { name: /toggle/i });
        const paragraph = screen.getByText('Off');
        await userEvent.click(button);
        expect(paragraph).toHaveTextContent('On');
        await userEvent.click(button);
        expect(paragraph).toHaveTextContent('Off');
    });
});
