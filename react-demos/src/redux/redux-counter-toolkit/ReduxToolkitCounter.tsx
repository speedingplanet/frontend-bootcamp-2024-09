import React from 'react';
import Counter from '../Counter';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, CounterState } from './counter-slice';

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
