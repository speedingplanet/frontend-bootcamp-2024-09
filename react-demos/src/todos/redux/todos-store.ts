import { combineReducers, configureStore, createSelector } from '@reduxjs/toolkit';
import { fetchAllTodos, reducer as todosReducer } from './todos-slice';
import { uiReducer } from './ui-slice';

export const store = configureStore({
	reducer: combineReducers({
		todos: todosReducer,
		ui: uiReducer,
	}),
});

store.dispatch(fetchAllTodos());

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export const createRootSelector = createSelector.withTypes<RootState>();
