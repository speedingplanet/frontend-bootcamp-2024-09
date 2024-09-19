/*
- What does our state look like?
- What do our actions look like?
	- toggleOverwrite (no payload)
	- toggleWasOperator (no payload)
	- updateDisplayValue (payload: added value)
	- setDisplayValue (payload: added value)
	- setOperationStack (payload: operator)
*/

import { OperationStack } from './calculator-types';

export interface CalculatorState {
	displayValue: string;
	operationStack: OperationStack | null;
	overwrite: boolean;
	wasOperator: boolean;
}

type CalculatorAction =
	| { type: 'setOverwrite'; payload: boolean }
	| { type: 'setWasOperator'; payload: boolean }
	| { type: 'setDisplayValue'; payload: string }
	| { type: 'updateDisplayValue'; payload: string }
	| { type: 'setOperationStack'; payload: OperationStack | null };

export function reducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
	switch (action.type) {
		case 'setOverwrite':
			return { ...state, overwrite: action.payload };
		case 'setWasOperator':
			return { ...state, wasOperator: action.payload };
		case 'setDisplayValue':
			return { ...state, displayValue: action.payload };
		case 'updateDisplayValue':
			return { ...state, displayValue: state.displayValue + action.payload };
		case 'setOperationStack':
			return { ...state, operationStack: action.payload };
		default:
			throw new Error('unknown action!');
	}
}
