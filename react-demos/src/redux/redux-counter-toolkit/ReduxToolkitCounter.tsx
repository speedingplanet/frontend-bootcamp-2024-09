import React from 'react';
import Counter from '../Counter';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, CounterState } from './counter-slice';

const ReduxToolkitCounter = () => {
	const dispatch = useDispatch();

	// This is a simplistic use of useSelector
	const count = useSelector((state: CounterState) => state.counter);

	const dispatchIncrement = () => {
		dispatch(increment());
	};

	return (
		<Counter
			increment={dispatchIncrement}
			decrement={() => dispatch(decrement())}
			value={count}
		/>
	);
};

export default ReduxToolkitCounter;
