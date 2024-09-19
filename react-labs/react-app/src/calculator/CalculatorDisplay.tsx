import React from 'react';

interface CalculatorDisplayProps {
	value: string;
}

export default function CalculatorDisplay({ value }: CalculatorDisplayProps) {
	return <span data-testid="test-display">{value || 0}</span>;
}
