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

		expect(mockEventHandler).not.toHaveBeenCalled();
		await user.click(screen.getByText(testLabel));
		expect(mockEventHandler).toHaveBeenCalled();
		expect(mockEventHandler).toHaveBeenCalledWith(testLabel);
	});
});
