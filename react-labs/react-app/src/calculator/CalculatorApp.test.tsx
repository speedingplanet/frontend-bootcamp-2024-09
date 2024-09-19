import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CalculatorApp from './CalculatorApp';

describe('CalculatorApp tests', () => {
	test('Smoke test', () => {
		render(<CalculatorApp />);
	});

	test.only('Adds 2 + 5', async () => {
		const user = userEvent.setup();
		render(<CalculatorApp />);
		let twoButton = screen.getByRole('button', { name: '2' });
		let fiveButton = screen.getByRole('button', { name: '5' });
		let plusButton = screen.getByRole('button', { name: '+' });
		let equalsButton = screen.getByRole('button', { name: '=' });

		let display = screen.getByTestId('test-display');
		// Click each button in turn, checking the display along the way
		expect(display.textContent).toBe('0');

		// Each event that provokes a state update has to go in an act() call
		// SEPARATELY
		await act(async () => {
			await user.click(twoButton);
		});
		expect(display.textContent).toBe('2');

		await act(async () => {
			await user.click(plusButton);
		});
		expect(display.textContent).toBe('2');

		await act(async () => {
			await user.click(fiveButton);
		});
		expect(display.textContent).toBe('5');

		await act(async () => {
			await user.click(equalsButton);
		});
		expect(display.textContent).toBe('7');
	});
});
