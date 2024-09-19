import { CalculatorAction, CalculatorState, reducer } from './calculator-reducer';

describe('calculator-reducer', () => {
	test('clearDisplay action', () => {
		const startingState: CalculatorState = {
			displayValue: '25',
			operationStack: [56, '+'],
			overwrite: false,
			wasOperator: false,
		};

		let { displayValue, operationStack, overwrite } = reducer(startingState, {
			type: 'clearDisplay',
		});
		expect(displayValue).toBe('0');
		expect(operationStack).toBeNull();
		expect(overwrite).toBeTruthy();
	});

	test('calculateValues, with existing operationStack', () => {
		let initialState: CalculatorState = {
			operationStack: [10, '+'],
			displayValue: '20',
			overwrite: false,
			wasOperator: false,
		};

		let action: CalculatorAction = {
			type: 'calculateValues',
			payload: {
				result: 10 + 20,
				operator: '-',
			},
		};

		let { displayValue, operationStack, overwrite } = reducer(initialState, action);

		expect(overwrite).toBeTruthy();
		expect(displayValue).toEqual('30');
		expect(operationStack).toStrictEqual([30, '-']);
	});
});
