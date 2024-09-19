import React, { useState } from 'react';
import classNames from 'classnames';
import { noop } from 'lodash-es';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';
import './calculator.css';
import { mathOperators, LabelValues, MathOperator, OperationStack } from './calculator-types';

function CalculatorApp() {
	const [displayValue, setDisplayValue] = useState('');
	const [overwrite, setOverwrite] = useState(false);
	const [operationStack, setOperationStack] = useState<OperationStack | null>();
	const [wasOperator, setWasOperator] = useState(false);
	// console.log(`displayValue: ${displayValue}`)

	function handleCalculatorButtonClick(buttonValue: LabelValues) {

		// Tell TypeScript we think buttonValue is a MathOperator
		if (mathOperators.includes(buttonValue as MathOperator)) {
			handleOperator(buttonValue as MathOperator);
		} else if (typeof buttonValue === 'string') {
			setWasOperator(false);
			if (overwrite) {
				setOverwrite(false);
				setDisplayValue(buttonValue);
			} else {
				setDisplayValue(displayValue + buttonValue);
			}
		}
	}

	function clearDisplay() {
		setDisplayValue('0');
		setOperationStack(null);
		setOverwrite(true);
	}

	function handleOperator(operator: MathOperator) {
		if (!operationStack) {
			setOperationStack([Number(displayValue), operator]);
			setOverwrite(true);
		} else if (wasOperator) {
			setOperationStack([operationStack[0], operator]);
		} else {
			let [lValue, previousOperator] = operationStack;

			let result = calculate(Number(lValue), previousOperator, Number(displayValue));
			setDisplayValue(result + ''); // Converts result to a String
			setOperationStack([result, operator]);
			setOverwrite(true);
			setWasOperator(true);
		}
	}

	function handleDecimalPoint() {
		if (displayValue.length === 0) {
			setDisplayValue('0.');
		} else if (!displayValue.includes('.')) {
			handleCalculatorButtonClick('.');
		}
	}

	function handleEquals() {
		if (operationStack) {
			let [lValue, operator] = operationStack;
			let result = calculate(Number(lValue), operator, Number(displayValue));
			setOperationStack(null);
			setDisplayValue(result + '');
			setOverwrite(true);
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
				<CalculatorDisplay value={displayValue} />
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
					className={classNames('operator', { 'active-button': operationStack && operationStack[1] === '/' })}
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
					className={classNames('operator', { 'active-button': operationStack && operationStack[1] === '*' })}
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
					className={classNames('operator', { 'active-button': operationStack && operationStack[1] === '-' })}
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
					className={classNames('operator', { 'active-button': operationStack && operationStack[1] === '+' })}
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
