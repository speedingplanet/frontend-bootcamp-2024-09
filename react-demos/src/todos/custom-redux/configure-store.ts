import { combineReducers, configureStore, createSelector } from '@reduxjs/toolkit';
import { reducer as todosReducer } from './todos-slice';

const store = configureStore({
	reducer: combineReducers({
		todos: todosReducer,
	}),
});

export { store };
export const createRootSelector = createSelector.withTypes<RootState>();

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
