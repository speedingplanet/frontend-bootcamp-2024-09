import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
	},
});

const { actions } = counterSlice;

// Action creators, they return {type: 'counter/increment'}
export const { increment, decrement } = actions;
export const reducer = counterSlice.reducer;
