import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as counterReducer } from './counter-slice';

export const store = configureStore({
	reducer: combineReducers({
		counter: counterReducer,
	}),
});

export type CounterState = ReturnType<typeof store.getState>;
export type CounterDispatch = typeof store.dispatch;
