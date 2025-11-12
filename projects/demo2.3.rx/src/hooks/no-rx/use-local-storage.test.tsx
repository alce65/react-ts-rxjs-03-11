import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type React from 'react';
import { useLocalStorage } from './use-local-storage';
describe('useLocalStorage', () => {
    const TestHookComponent: React.FC = () => {
        const [value, setValue, getValue] = useLocalStorage<string>(
            'test-key',
            'Initial Value'
        );

        return (
            <>
                <h3>Test Hook</h3>
                <button onClick={() => setValue('New Value')}>Set Value</button>
                <button onClick={() => getValue()}>Get Value</button>
                <output>{value}</output>
            </>
        );
    };

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should render correctly', () => {
        render(<TestHookComponent />);
        const heading = screen.getByRole('heading', { name: /test hook/i });
        expect(heading).toBeInTheDocument();
    });

    test('should set localStorage value', async () => {
        vi.spyOn(Storage.prototype, 'setItem').mockReturnValue(undefined);
        render(<TestHookComponent />);
        const output = screen.getByRole('status');
        const setButton = screen.getByRole('button', { name: /set value/i });
        await userEvent.click(setButton);
        expect(output).toHaveTextContent('New Value');
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'test-key',
            JSON.stringify('New Value')
        );
    });

    test('should get localStorage value', async () => {
        vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
        render(<TestHookComponent />);
        screen.debug();
        const output = screen.getByRole('status');
        const getButton = screen.getByRole('button', { name: /get value/i });
        await userEvent.click(getButton);
        expect(output).toHaveTextContent('Initial Value');
        expect(localStorage.getItem).toHaveBeenCalledWith('test-key');
    });

    test('should get localStorage value without value', async () => {
        vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('"JSON value"');
        render(<TestHookComponent />);
        screen.debug();
        const output = screen.getByRole('status');
        const getButton = screen.getByRole('button', { name: /get value/i });
        await userEvent.click(getButton);
        expect(output).toHaveTextContent('JSON value');
        expect(localStorage.getItem).toHaveBeenCalledWith('test-key');
    });
});
