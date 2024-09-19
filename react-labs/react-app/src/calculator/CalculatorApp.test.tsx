import { act, render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CalculatorApp from './CalculatorApp';

describe('CalculatorApp tests', () => {
	let user: UserEvent;

	beforeEach(() => {
		user = userEvent.setup();
	});

	test('Smoke test', () => {
		render(<CalculatorApp />);
	});

	test('Accessing the display without a testId', () => {
		const { baseElement } = render(<CalculatorApp />);
		/*
		We're looking for this HTML:
		<div className="display">
				<span>display value</span>
		</div>
		*/

		// Be careful, as this depends on the HTML and CSS of the element never changing
		let display = baseElement.querySelector('.display span');
		expect(display).not.toBeNull();
		expect(display?.textContent).toBe('0');
	});

	test('Displays the number 2 when clicked', async () => {
		render(<CalculatorApp />);
		let twoButton = screen.getByRole('button', { name: '2' });
		let display = screen.getByTestId('test-display');
		expect(display.textContent).toBe('0');
		await act(async () => {
			await user.click(twoButton);
		});

		expect(display.textContent).toBe('2');
	});

	test('Adds 2 + 5', async () => {
		render(<CalculatorApp />);
		let twoButton = screen.getByRole('button', { name: '2' });
		let fiveButton = screen.getByRole('button', { name: '5' });
		let plusButton = screen.getByRole('button', { name: '+' });
		let equalsButton = screen.getByRole('button', { name: '=' });

		let display = screen.getByTestId('test-display');
		// Click each button in turn, checking the display along the way
		expect(display.textContent).toBe('0');

		// Shortcut for the await act(async() => {}) code.
		await actOnce(user, 'click', twoButton);
		expect(display.textContent).toBe('2');

		// Each event that provokes a state update has to go in an act() call
		// SEPARATELY
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

	test('clears the display', async () => {
		render(<CalculatorApp />);
		let twoButton = screen.getByRole('button', { name: '2' });
		let fiveButton = screen.getByRole('button', { name: '5' });
		let clearButton = screen.getByRole('button', { name: 'clear' });
		let display = screen.getByTestId('test-display');

		await act(async () => {
			await user.click(twoButton);
		});
		expect(display.textContent).toBe('2');

		await act(async () => {
			await user.click(fiveButton);
		});
		expect(display.textContent).toBe('25');

		await act(async () => {
			await user.click(twoButton);
		});
		expect(display.textContent).toBe('252');

		await act(async () => {
			await user.click(clearButton);
		});
		expect(display.textContent).toBe('0');
	});
});

async function actOnce(user: UserEvent, event: keyof UserEvent, target: HTMLElement) {
	return await act(async () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		await user[event](target);
	});
}
