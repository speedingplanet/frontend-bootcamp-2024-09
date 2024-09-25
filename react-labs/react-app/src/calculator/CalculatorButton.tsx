import { useContext } from 'react';
import classNames from 'classnames';
import React from 'react';
import { LabelValues, MathOperator } from './calculator-types';
import { CalculatorDataContext } from './CalculatorApp';

interface CalculatorButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	label: LabelValues;
	/**
	 * To set the type for a function:
	 * (arg1: type, arg2: type) => returnType
	 * void is a special return type to indicate that the return type is irrelevant
	 */
	onButtonClick: (label: LabelValues) => void;
}

export default function CalculatorButton({
	label,
	onButtonClick,
	className,
	...props
}: CalculatorButtonProps) {
	const currentState = useContext(CalculatorDataContext);
	let classes = ['calculator-button'];
	if (currentState?.operationStack && currentState.operationStack[1] === label) {
		classes.push('active-button');
	}

	return (
		<button
			{...props}
			className={classNames(className, ...classes)}
			onClick={() => onButtonClick(label)}
		>
			{label}
		</button>
	);
}
