import React from 'react';
import { SortConfig } from './sorting-slice';

type SortIndicatorProps = {
	sortConfig: SortConfig;
	currentField: string;
};

function SortIndicator({
	sortConfig: { sortDirection, sortField },
	currentField,
}: SortIndicatorProps) {
	let sortIndicator = '';
	if (sortField === currentField) {
		if (sortDirection === 'asc') {
			sortIndicator = '⏫';
		} else if (sortDirection === 'desc') {
			sortIndicator = '⏬';
		}
	}

	return <span>{sortIndicator}</span>;
}

export default SortIndicator;
