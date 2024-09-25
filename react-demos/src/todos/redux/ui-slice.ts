import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../todos-types';

type SortDirection = 'asc' | 'desc' | null;
type TodoFields = keyof Omit<Todo, 'id'> | null;

interface UiState {
	sortColumn: TodoFields;
	sortDirection: SortDirection;
}

const initialState: UiState = {
	sortColumn: null,
	sortDirection: null,
};

let uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		sortTodos: (state: UiState, action: PayloadAction<TodoFields>) => {
			if (action.payload === null) {
				return { sortDirection: null, sortColumn: null };
			}

			let nextSortColumn = action.payload;
			let nextSortDirection: SortDirection = 'asc';

			if (state.sortColumn === nextSortColumn && state.sortDirection === 'asc') {
				nextSortDirection = 'desc';
			}

			// RTK adds the Immer library so we can "mutate" state directly
			// Immer creates new state objects when we "mutate" state
			state.sortColumn = nextSortColumn;
			state.sortDirection = nextSortDirection;
		},
	},
	selectors: {
		selectSortConfig: (state) => state,
		selectSortDirection: (state) => state.sortDirection,
		selectSortColumn: (state) => state.sortColumn,
	},
});

export const uiReducer = uiSlice.reducer;

const { actions } = uiSlice;
export const { sortTodos } = actions;
