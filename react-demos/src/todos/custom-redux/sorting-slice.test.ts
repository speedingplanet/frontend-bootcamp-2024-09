import { expect, describe, test } from 'vitest';
import { changeSort, reducer, SortConfig, SortDirection } from './sorting-slice';

describe('Sorting Slice', () => {
	test('Sort with no previous sort field', () => {
		let initialState: SortConfig = {
			sortField: '',
			sortDirection: 'asc',
		};

		let testDirection = 'testField';
		let sortAction = changeSort(testDirection);

		let testResult = reducer(initialState, sortAction);

		expect(testResult.sortField).toBe(testDirection);
		expect(testResult.sortDirection).toBe('asc');
	});

	test('Sort with previous, but different sort field', () => {
		let initialSortField = 'one';
		let payloadSortField = 'two';

		let initialState: SortConfig = {
			sortField: initialSortField,
			sortDirection: 'asc',
		};

		let sortAction = changeSort(payloadSortField);

		let testResult = reducer(initialState, sortAction);

		expect(testResult.sortField).toBe(payloadSortField);
		expect(testResult.sortDirection).toBe('asc');
	});

	test('Sort toggles sort direction to desc', () => {
		let initialSortField = 'one';
		let initialSortDirection: SortDirection = 'asc';
		let payloadSortField = 'one';

		let initialState: SortConfig = {
			sortField: initialSortField,
			sortDirection: initialSortDirection,
		};

		let sortAction = changeSort(payloadSortField);
		let testResult = reducer(initialState, sortAction);

		expect(initialState.sortField).toBe(testResult.sortField);
		expect(testResult.sortDirection).toBe('desc');
	});

	test('Sort toggles sort direction to asc', () => {
		let initialSortField = 'one';
		let initialSortDirection: SortDirection = 'desc';
		let payloadSortField = 'one';

		let initialState: SortConfig = {
			sortField: initialSortField,
			sortDirection: initialSortDirection,
		};

		let sortAction = changeSort(payloadSortField);
		let testResult = reducer(initialState, sortAction);

		expect(initialState.sortField).toBe(testResult.sortField);
		expect(testResult.sortDirection).toBe('asc');
	});
});
