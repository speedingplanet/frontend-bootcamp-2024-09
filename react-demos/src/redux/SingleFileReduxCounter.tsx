import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import { connect, Provider } from 'react-redux';
import { CounterState } from '../demo-types';
import { Action, Dispatch } from '@reduxjs/toolkit';
import Counter from './Counter';

const initialState = { counter: 1 };

// Action types
const actions = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
};

// Action creators
const addOne = () => ({ type: actions.INCREMENT });
const subtractOne = () => ({ type: actions.DECREMENT });

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case actions.INCREMENT:
			return { counter: state.counter + 1 };
		case actions.DECREMENT:
			return { counter: state.counter - 1 };
		default:
			return state;
	}
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

const mapStateToProps = (state: CounterState) => ({
	value: state.counter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	increment: () => dispatch(addOne()),
	decrement: () => dispatch(subtractOne()),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default function SingleFileReduxCounter() {
	return (
		<Provider store={store}>
			<ConnectedCounter />
		</Provider>
	);
}
