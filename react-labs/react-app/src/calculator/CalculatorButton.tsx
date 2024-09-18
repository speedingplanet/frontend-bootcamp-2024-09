import React from 'react';

interface CalculatorButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	label: string;
	/**
	 * type a function:
	 * (arg1: type, arg2: type) => returnType
	 * void is a special return type to indicate that the return type is irrelevant
	 */
	onButtonClick: (label: string) => void;
}

export default function CalculatorButton({
	label,
	onButtonClick,
	...props
}: CalculatorButtonProps) {
	return (
		<button
			{...props}
			onClick={() => onButtonClick(label)}
		>
			{label}
		</button>
	);
}
