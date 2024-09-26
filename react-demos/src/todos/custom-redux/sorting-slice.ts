import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
	sortField: string;
	sortDirection: SortDirection;
}

const initialState: SortConfig = {
	sortField: '',
	sortDirection: 'asc',
};

const sortingSlice = createSlice({
	name: 'sorting',
	initialState,
	reducers: {
		changeSort: (state, action: PayloadAction<string>) => {
			// If there's no sort field at all, sort by action.payload, ascending
			if (state.sortField === '') {
				state.sortField = action.payload;
				state.sortDirection = 'asc';
			}

			// If action.payload is not equal to the sort field, sort by
			// action.payload, ascending (user switched sort fields)
			else if (state.sortField !== action.payload) {
				state.sortField = action.payload;
				state.sortDirection = 'asc';
			}

			// If action.payload is equal to the sort field AND sort direction
			// is ascending, change sort direction to descending.
			else if (state.sortField === action.payload) {
				if (state.sortDirection === 'asc') {
					state.sortDirection = 'desc';
				} else {
					// Otherwise, action.payload === sort field, change direction to ascending
					state.sortDirection = 'asc';
				}
			}
		},
	},
});

const { actions } = sortingSlice;
export const { changeSort } = actions;
export const reducer = sortingSlice.reducer;
