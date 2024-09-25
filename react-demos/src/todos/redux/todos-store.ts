import { combineReducers, configureStore, createSelector } from '@reduxjs/toolkit';
import { fetchAllTodos, reducer as todosReducer } from './todos-slice';
import { uiReducer } from './ui-slice';

export const store = configureStore({
	reducer: combineReducers({
		todos: todosReducer,
		ui: uiReducer,
	}),
});

/*
try {
	let response = await fetch('http://localhost:8000/todos');
	if (response.ok) {
		let results = await response.json();
		store.dispatch(populateTodos(results))
	} else {
		throw Error(`Bad response: ${response.status}`);
	}
} catch (error) {
	console.log('todos-dao error:', error);
}
*/

store.dispatch(fetchAllTodos());

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export const createRootSelector = createSelector.withTypes<RootState>();
