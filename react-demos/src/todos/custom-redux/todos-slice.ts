import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../todos-types';

let initialState: Array<Todo> = [];

let todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (todos, action: PayloadAction<Todo>) => {
			todos.push(action.payload);
		},
		deleteTodo: (todos, action: PayloadAction<number>) =>
			todos.filter((todo) => todo.id !== action.payload),
		editTodo: (todos, action: PayloadAction<Todo>) => {
			let matchedTodo = todos.find((todo) => todo.id === action.payload.id);
			if (matchedTodo) {
				Object.assign(matchedTodo, action.payload);
			}
		},
	},
});

const { actions } = todosSlice;
export const { addTodo, deleteTodo, editTodo } = actions;
export const reducer = todosSlice.reducer;
