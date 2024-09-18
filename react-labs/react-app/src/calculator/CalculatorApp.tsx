import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';
import './calculator.css';

function CalculatorApp() {
	const [displayValue, setDisplayValue] = useState('');

	function handleCalculatorButtonClick(event: React.MouseEvent<HTMLDivElement>) {
		setDisplayValue(displayValue + event.currentTarget.textContent)
	}

	return (
		// section>div.display+div.button
		<section className="calculator-root">
			<div className="display">
				<CalculatorDisplay value={displayValue}/>
			</div>
			<div
				className="button"
				onClick={handleCalculatorButtonClick}
			>
				<CalculatorButton />
			</div>
		</section>
	);
}

export default CalculatorApp;
