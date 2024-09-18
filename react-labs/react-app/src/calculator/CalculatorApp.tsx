import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';
import './calculator.css';

function CalculatorApp() {
	const [displayValue, setDisplayValue] = useState('');

	function handleCalculatorButtonClick(label: string) {
		setDisplayValue(displayValue + label);
	}

	return (
		// section>div.display+div.button
		<section className="calculator-root">
			<div className="display">
				<CalculatorDisplay value={displayValue} />
			</div>
			<div className="button">
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
			</div>
		</section>
	);
}

export default CalculatorApp;
