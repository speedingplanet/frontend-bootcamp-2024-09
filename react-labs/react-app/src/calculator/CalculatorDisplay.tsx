import React from 'react';

interface CalculatorDisplayProps {
	value: string;
}

export default function CalculatorDisplay({ value }: CalculatorDisplayProps) {
	return <div>{value || 0}</div>;
}
