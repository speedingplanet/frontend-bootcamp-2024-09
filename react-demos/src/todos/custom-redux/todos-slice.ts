import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../todos-types';

const initialState: Array<Todo> = [
	{ id: 1, text: 'Groceries', done: false },
	{ id: 2, text: 'Change oil', done: true },
	{ id: 3, text: 'Clean kitchen table', done: false },
];

let nextId = 4;

let todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (todos, action: PayloadAction<Omit<Todo, 'id'>>) => {
			todos.push({ ...action.payload, id: nextId++ });
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
