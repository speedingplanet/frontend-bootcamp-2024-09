import { Action } from '@reduxjs/toolkit';
import { actions } from './actions';

const initialState = { counter: 1 };

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

export default reducer;
