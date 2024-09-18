import React from 'react'

export default function CalculatorButton() {
	function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
		console.log(`The value is ${event.currentTarget.textContent}`)
	}

	return (
		<button onClick={handleButtonClick}>5</button>
	)
}
