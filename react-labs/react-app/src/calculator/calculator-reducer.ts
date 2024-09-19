/*
- What does our state look like?
- What do our actions look like?
	- toggleOverwrite (no payload)
	- toggleWasOperator (no payload)
	- updateDisplayValue (payload: added value)
	- setDisplayValue (payload: added value)
	- setOperationStack (payload: operator)
*/

import { MathOperator, OperationStack } from './calculator-types';

export interface CalculatorState {
	displayValue: string;
	operationStack: OperationStack | null;
	overwrite: boolean;
	wasOperator: boolean;
}

export type CalculatorAction =
	| { type: 'setOverwrite'; payload: boolean }
	| { type: 'setWasOperator'; payload: boolean }
	| { type: 'setOperationStack'; payload: OperationStack | null }
	| { type: 'setDisplayValue'; payload: string }
	| { type: 'clearDisplay' }
	| {
			type: 'calculateValues';
			payload: {
				result: number;
				operator: MathOperator | null;
			};
	  };

export function reducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
	switch (action.type) {
		case 'setOverwrite':
			return { ...state, overwrite: action.payload };
		case 'setWasOperator':
			return { ...state, wasOperator: action.payload };
		case 'setDisplayValue': {
			let nextState = { ...state };
			if (state.overwrite) {
				nextState.overwrite = false;
				nextState.displayValue = action.payload;
			} else {
				nextState.displayValue = nextState.displayValue + action.payload;
			}
			return nextState;
		}
		case 'setOperationStack':
			return { ...state, operationStack: action.payload };
		case 'clearDisplay':
			return { ...state, displayValue: '0', operationStack: null, overwrite: true };
		case 'calculateValues': {
			let nextOperationStack: OperationStack | null = [...state.operationStack!];
			if (action.payload.operator) {
				nextOperationStack = [action.payload.result, action.payload.operator];
			} else {
				nextOperationStack = null;
			}

			return {
				...state,
				displayValue: String(action.payload.result),
				operationStack: nextOperationStack,
				overwrite: true,
			};
		}
		default:
			throw new Error('unknown action!');
	}
}
