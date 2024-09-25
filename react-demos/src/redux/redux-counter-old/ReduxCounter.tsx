/* eslint-disable @typescript-eslint/ban-ts-comment */
import { connect } from 'react-redux';
import Counter from '../Counter';
import { addOne, subtractOne } from './actions';

// TypeScript would raise problems here, solve them by using the Redux Toolkit
// @ts-expect-error
const mapStateToProps = (state) => ({
	value: state.counter,
});

// TypeScript would raise problems here, solve them by using the Redux Toolkit
// @ts-expect-error
const mapDispatchToProps = (dispatch) => ({
	increment: () => dispatch(addOne()),
	decrement: () => dispatch(subtractOne()),
});

const ReduxCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ReduxCounter;
