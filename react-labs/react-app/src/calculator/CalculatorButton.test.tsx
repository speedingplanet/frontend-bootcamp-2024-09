import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CalculatorButton from './CalculatorButton';

describe('CalculatorButton tests', () => {
	test('Smoke test', () => {
		render(
			<CalculatorButton
				label="5"
				onButtonClick={() => {}}
			/>
		);
	});

	test('Label renders correctly', () => {
		let testLabel = '5';
		render(
			<CalculatorButton
				label={testLabel}
				onButtonClick={() => {}}
			/>
		);

		// let button = screen.getByText(testLabel);
		let button = screen.getByRole('button');
		expect(button.textContent).toBe(testLabel);
	});

	test('Emits event with label value', async () => {
		let testLabel = '10';
		let mockEventHandler = jest.fn();
		const user = userEvent.setup();
		render(
			<CalculatorButton
				label={testLabel}
				onButtonClick={mockEventHandler}
			/>
		);

		// Check your assumptions: no one has invoked the handler yet
		expect(mockEventHandler).not.toHaveBeenCalled();

		// Fire an event from the user
		await user.click(screen.getByRole('button'));

		expect(mockEventHandler).toHaveBeenCalled();
		expect(mockEventHandler).toHaveBeenCalledWith(testLabel);
	});
});
