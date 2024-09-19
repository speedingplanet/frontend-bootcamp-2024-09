import React, { useReducer } from 'react';
import classNames from 'classnames';
import { noop } from 'lodash-es';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';
import './calculator.css';
import { mathOperators, LabelValues, MathOperator } from './calculator-types';
import { CalculatorState, reducer } from './calculator-reducer';

const initialState: CalculatorState = {
	overwrite: false,
	wasOperator: false,
	operationStack: null,
	displayValue: '',
};

function CalculatorApp() {
	const [currentState, dispatch] = useReducer(reducer, initialState);

	function handleCalculatorButtonClick(buttonValue: LabelValues) {
		// Tell TypeScript we think buttonValue is a MathOperator
		if (mathOperators.includes(buttonValue as MathOperator)) {
			handleOperator(buttonValue as MathOperator);
		} else if (typeof buttonValue === 'string') {
			dispatch({ type: 'setWasOperator', payload: false });
			if (currentState.overwrite) {
				dispatch({ type: 'setOverwrite', payload: false });
				dispatch({ type: 'setDisplayValue', payload: buttonValue });
			} else {
				dispatch({ type: 'updateDisplayValue', payload: buttonValue });
			}
		}
	}

	function clearDisplay() {
		dispatch({ type: 'setDisplayValue', payload: '0' });
		dispatch({type: 'setOperationStack', payload: null});
		dispatch({ type: 'setOverwrite', payload: true });
	}

	function handleOperator(operator: MathOperator) {
		if (!currentState.operationStack) {
			dispatch({type: 'setOperationStack', payload: [Number(currentState.displayValue), operator]});
			dispatch({ type: 'setOverwrite', payload: true });
		} else if (currentState.wasOperator) {
			dispatch({type: 'setOperationStack', payload: [currentState.operationStack[0], operator]});
		} else {
			let [lValue, previousOperator] = currentState.operationStack;

			let result = calculate(lValue, previousOperator, Number(currentState.displayValue));
			dispatch({ type: 'setDisplayValue', payload: result + '' });
			dispatch({type: 'setOperationStack', payload: [result, operator]});
			dispatch({ type: 'setOverwrite', payload: true });
			dispatch({ type: 'setWasOperator', payload: true });
		}
	}

	function handleDecimalPoint() {
		if (currentState.displayValue.length === 0) {
			dispatch({ type: 'setDisplayValue', payload: '0.' });
		} else if (!currentState.displayValue.includes('.')) {
			handleCalculatorButtonClick('.');
		}
	}

	function handleEquals() {
		if (currentState.operationStack) {
			let [lValue, operator] = currentState.operationStack;
			let result = calculate(Number(lValue), operator, Number(currentState.displayValue));
			dispatch({type: 'setOperationStack', payload: (null)});
			dispatch({ type: 'setDisplayValue', payload: result + '' });
			dispatch({ type: 'setOverwrite', payload: true });
			// console.log(`equals ${result}`)
		}
	}

	function calculate(lValue: number, operator: MathOperator, rValue: number): number {
		switch (operator) {
			case '+':
				return lValue + rValue;
			case '-':
				return lValue - rValue;
			case '/':
				return lValue / rValue;
			case '*':
			default:
				return lValue * rValue;
		}
	}

	return (
		// section>div.display+div.button
		<section className="calculator-root">
			<div className="display">
				<CalculatorDisplay value={currentState.displayValue} />
			</div>
			<div>
				<CalculatorButton
					className="special"
					label="clear"
					onButtonClick={clearDisplay}
				/>
			</div>
			<div>
				<CalculatorButton
					className="special"
					label="+/-"
					onButtonClick={noop}
					disabled
				/>
			</div>
			<div>
				<CalculatorButton
					className="special"
					label="%"
					onButtonClick={noop}
					disabled
				/>
			</div>
			<div>
				<CalculatorButton
					label="/"
					onButtonClick={handleCalculatorButtonClick}
					className={classNames('operator', {
						'active-button': currentState.operationStack && currentState.operationStack[1] === '/',
					})}
				/>
			</div>
			<div>
				<CalculatorButton
					label="7"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="8"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="9"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="*"
					onButtonClick={handleCalculatorButtonClick}
					className={classNames('operator', {
						'active-button': currentState.operationStack && currentState.operationStack[1] === '*',
					})}
				/>
			</div>
			<div>
				<CalculatorButton
					label="4"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="5"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="6"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="-"
					onButtonClick={handleCalculatorButtonClick}
					className={classNames('operator', {
						'active-button': currentState.operationStack && currentState.operationStack[1] === '-',
					})}
				/>
			</div>
			<div>
				<CalculatorButton
					label="1"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="2"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="3"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="+"
					className={classNames('operator', {
						'active-button': currentState.operationStack && currentState.operationStack[1] === '+',
					})}
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div className="zero">
				<CalculatorButton
					label="0"
					className="number"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="."
					className="number"
					onButtonClick={handleDecimalPoint}
				/>
			</div>
			<div>
				<CalculatorButton
					label="="
					className="operator"
					onButtonClick={handleEquals}
				/>
			</div>
		</section>
	);
}

export default CalculatorApp;
