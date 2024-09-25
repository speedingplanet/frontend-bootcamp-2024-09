import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { dao } from './todos-dao';
import { Todo } from '../todos-types';

let nextId = 10;
const initialState: Array<Todo> = [];

export const fetchAllTodos = createAsyncThunk('todos/fetchAllTodos', async () => {
	const todos = await dao.fetchTodos();
	return todos;
});

export const saveTodo = createAsyncThunk('todos/saveTodo', async (text: string) => {
	const insertedTodo = await dao.saveTodo({ text, done: false });
	return insertedTodo;
});

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			state.push({
				id: nextId++,
				text: action.payload,
				done: false,
			});
		},
		changeTodo: (state, action: PayloadAction<Todo>) => {
			return state.map((t) => {
				if (t.id === action.payload.id) {
					return action.payload;
				} else {
					return t;
				}
			});
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			return state.filter((t) => t.id !== action.payload);
		},
		populateTodos: (state, action: PayloadAction<Array<Todo>>) => {
			return [...action.payload];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
			return [...action.payload];
		});
		builder.addCase(saveTodo.fulfilled, (state, action) => {
			state.push(action.payload);
		});
	},
});

const { actions } = todosSlice;
export const { addTodo, changeTodo, deleteTodo, populateTodos } = actions;
export const reducer = todosSlice.reducer;
