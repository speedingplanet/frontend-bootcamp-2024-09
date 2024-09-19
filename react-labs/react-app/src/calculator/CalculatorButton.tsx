import classNames from 'classnames';
import React from 'react';
import { LabelValues } from './calculator-types';

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
	return (
		<button
			{...props}
			className={classNames(className, 'calculator-button', { disabled: props.disabled })}
			onClick={() => onButtonClick(label)}
		>
			{label}
		</button>
	);
}
