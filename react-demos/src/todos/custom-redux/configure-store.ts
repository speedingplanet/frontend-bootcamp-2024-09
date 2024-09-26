import { combineReducers, configureStore, createSelector } from '@reduxjs/toolkit';
import { reducer as todosReducer } from './todos-slice';

const store = configureStore({
	reducer: combineReducers({
		todos: todosReducer,
	}),
});

export { store };
export const createRootSelector = createSelector.withTypes<RootState>();

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
