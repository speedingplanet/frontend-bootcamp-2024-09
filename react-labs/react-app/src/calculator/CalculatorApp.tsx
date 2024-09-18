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

	function handleCalculatorButtonClick(buttonValue: string) {
		if (overwrite) {
			setOverwrite(false);
			setDisplayValue(buttonValue);
		} else {
			setDisplayValue(displayValue + buttonValue);
		}
	}

	function clearDisplay() {
		// TODO: Should we invoke setOverwrite here?
		setDisplayValue('');
		setOperationStack([]);
	}

	function handleOperator(operator: string) {
		if (operationStack.length > 0) {
			let [lValue, previousOperator] = operationStack;
			let result = calculate(Number(lValue), previousOperator, Number(displayValue));
			setDisplayValue(result + ''); // Converts result to a String
			setOperationStack([result + '', operator]);
			setOverwrite(true);
		} else {
			setOperationStack([displayValue, operator]);
			setOverwrite(true);
		}
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
			<div>
				<CalculatorButton
					label="clear"
					onButtonClick={clearDisplay}
				/>
			</div>
			<div>
				<CalculatorButton
					label="+/-"
					onButtonClick={()=>{}}
				/>
			</div>
			<div>
				<CalculatorButton
					label="%"
					onButtonClick={()=>{}}
				/>
			</div>
			<div>
				<CalculatorButton
					label="/"
					onButtonClick={handleOperator}
				/>
			</div>
			<div>
				<CalculatorButton
					label="7"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="8"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="9"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="*"
					onButtonClick={handleOperator}
				/>
			</div>
			<div>
				<CalculatorButton
					label="4"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="5"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="6"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="-"
					onButtonClick={handleOperator}
				/>
			</div>
			<div>
				<CalculatorButton
					label="1"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="2"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="3"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="+"
					onButtonClick={handleOperator}
				/>
			</div>
			<div className="button zero">
				<CalculatorButton
					label="0"
					onButtonClick={handleCalculatorButtonClick}
				/>
			</div>
			<div>
				<CalculatorButton
					label="="
					onButtonClick={handleEquals}
				/>
			</div>
			<div>
				<CalculatorButton
					label="."
					onButtonClick={()=>{}}
				/>
			</div>
		</section>
	);
}

export default CalculatorApp;
