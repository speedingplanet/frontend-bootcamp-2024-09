import React from 'react';
import { Provider } from 'react-redux';
import { store } from './counter-slice';
import ReduxToolkitCounter from './ReduxToolkitCounter';

export default function ReduxToolkitContainer() {
	return (
		<Provider store={store}>
			<ReduxToolkitCounter />
		</Provider>
	);
}
