import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
	},
});

const { actions } = counterSlice;
export const { increment, decrement } = actions;

export const store = configureStore({
	reducer: combineReducers({
		counter: counterSlice.reducer,
	}),
});

export type CounterState = ReturnType<typeof store.getState>;
export type CounterDispatch = typeof store.dispatch;
