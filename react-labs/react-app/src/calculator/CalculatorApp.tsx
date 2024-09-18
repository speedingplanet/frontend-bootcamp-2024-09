import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';
import './calculator.css';

/*
Enter numbers until an operator
Operator stores the number and the operator
Enter new numbers
Equals or operator or clear

TODO:
- Does not handle entering more than one operator
- Does not handle hitting = more than once

*/

function CalculatorApp() {
	const [displayValue, setDisplayValue] = useState('');
	const [overwrite, setOverwrite] = useState(false);
	const [operationStack, setOperationStack] = useState<Array<string>>([]);

	function handleCalculatorButtonClick(label: string) {
		if (overwrite) {
			setOverwrite(false);
			setDisplayValue(label);
		} else {
			setDisplayValue(displayValue + label);
		}
	}

	function clearDisplay() {
		setDisplayValue('');
		setOperationStack([]);
	}

	function handleOperator(operator: string) {
		// Add displayValue and operator to the stack
		// Set overwrite to true

		if (operationStack.length > 0) {
			let [lValue, previousOperator] = operationStack;
			let result = calculate(Number(lValue), previousOperator, Number(displayValue));
			setDisplayValue(result + '');
			setOperationStack([result + '', operator])
			setOverwrite(true);

		} else {

			setOperationStack([...operationStack, displayValue, operator]);
			setOverwrite(true);
		}

		// If the stack has a length, evaluate (stack[0] stack[1] displayValue)
		// Set the displayValue to the result
		// Store the result and the operator in the stack
	}

	function handleEquals() {
		let [lValue, operator] = operationStack;
		let result = calculate(Number(lValue), operator, Number(displayValue));
		setOperationStack([]);
		setDisplayValue(result + '');
		setOverwrite(true);
	}

	function calculate(lValue: number, operator: string, rValue: number): number {

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
			<div className="button">
				<CalculatorButton
					label="0"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="1"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="2"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="3"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="4"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="5"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="6"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="7"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="8"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="9"
					onButtonClick={handleCalculatorButtonClick}
				/>
				<CalculatorButton
					label="clear"
					onButtonClick={clearDisplay}
				/>
				<CalculatorButton
					label="+"
					onButtonClick={handleOperator}
				/>
				<CalculatorButton
					label="-"
					onButtonClick={handleOperator}
				/>
				<CalculatorButton
					label="*"
					onButtonClick={handleOperator}
				/>
				<CalculatorButton
					label="/"
					onButtonClick={handleOperator}
				/>
				<CalculatorButton
					label="="
					onButtonClick={handleEquals}
				/>
			</div>
		</section>
	);
}

export default CalculatorApp;
