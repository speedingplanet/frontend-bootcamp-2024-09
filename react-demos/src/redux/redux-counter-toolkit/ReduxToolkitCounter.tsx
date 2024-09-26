import React from 'react';
import Counter from '../Counter';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counter-slice';
import { CounterState } from './configure-counter-store';

const ReduxToolkitCounter = () => {
	const dispatch = useDispatch();

	// This is a simplistic use of useSelector,
	// but subscribes this component to state updated
	const count = useSelector((state: CounterState) => state.counter);

	return (
		<Counter
			increment={() => dispatch(increment())}
			decrement={() => dispatch(decrement())}
			value={count}
		/>
	);
};

export default ReduxToolkitCounter;
