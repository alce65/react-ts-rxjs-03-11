import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter2Buttons } from './counter-2buttons';
import {
    CounterWithEvent1,
    CounterWithEvent2,
    CounterWithEvent3,
    CounterWithEvent4,
} from './counter-dataset';

describe('Counter2Buttons component', () => {
    test('should start with 0', () => {
        render(<Counter2Buttons />);
        const textElement = screen.getByText(/count is 0/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should increase after click the button ➕', async () => {
        render(<Counter2Buttons />);
        const buttonElement = screen.getByRole('button', { name: /➕/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is 1/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should decrease after click the button ➖', async () => {
        render(<Counter2Buttons />);
        const buttonElement = screen.getByRole('button', { name: /➖/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is -1/i);
        expect(textElement).toBeInTheDocument();
    });
});

describe('CounterWithEvent1 component', () => {
    test('should start with 0', () => {
        render(<CounterWithEvent1 initialCount={0} />);
        const textElement = screen.getByText(/count is 0/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should increase after click the button ➕', async () => {
        render(<CounterWithEvent1 initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➕/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is 1/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should decrease after click the button ➖', async () => {
        render(<CounterWithEvent1 initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➖/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is -1/i);
        expect(textElement).toBeInTheDocument();
    });
});

describe('CounterWithEvent2 component', () => {
    test('should start with 0', () => {
        render(<CounterWithEvent2 initialCount={0} />);
        const textElement = screen.getByText(/count is 0/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should increase after click the button ➕', async () => {
        render(<CounterWithEvent2 initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➕/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is 1/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should decrease after click the button ➖', async () => {
        render(<CounterWithEvent2 initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➖/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is -1/i);
        expect(textElement).toBeInTheDocument();
    });
});

describe('CounterWithEvent3 component', () => {
    test('should start with 0', () => {
        render(<CounterWithEvent3 initialCount={0} />);
        const textElement = screen.getByText(/count is 0/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should increase after click the button ➕', async () => {
        render(<CounterWithEvent3 initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➕/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is 1/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should decrease after click the button ➖', async () => {
        render(<CounterWithEvent3 initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➖/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is -1/i);
        expect(textElement).toBeInTheDocument();
    });
});

describe('CounterWithEvent4 component', () => {
    test('should start with 0', () => {
        render(<CounterWithEvent4 initialCount={0} />);
        const textElement = screen.getByText(/count is 0/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should increase after click the button ➕', async () => {
        render(<CounterWithEvent4 initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➕/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is 1/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should decrease after click the button ➖', async () => {
        render(<CounterWithEvent4 initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➖/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is -1/i);
        expect(textElement).toBeInTheDocument();
    });
});
