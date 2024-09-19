// export type MathOperator = '+' | '-' | '*' | '/';

/*
enum MathOperator {
	PLUS = '+',
	MINUS = '-',
	MULTIPLY = '*',
	DIVIDE = '/',
}
	*/

export const mathOperators = ['+', '-', '*', '/'] as const;
export type MathOperator = typeof mathOperators[number];
export type OperationStack = [number, MathOperator];
export type LabelValues = MathOperator | string;
