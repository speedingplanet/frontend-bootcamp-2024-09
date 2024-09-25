import { InputTodo } from '../todos-types';

let baseUrl = 'http://localhost:8000/todos';

async function fetchTodos() {
	try {
		let response = await fetch(baseUrl);
		if (response.ok) {
			let results = await response.json();
			return results;
		} else {
			throw Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.log('todos-dao error:', error);
		throw error;
	}
}

async function saveTodo(todo: InputTodo) {
	try {
		let response = await fetch(baseUrl, {
			method: 'post',
			body: JSON.stringify(todo),
			headers: { 'Content-type': 'application/json' },
		});
		if (response.ok) {
			let results = await response.json();
			return { ...results, ...todo };
		} else {
			throw Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.log('todos-dao error:', error);
		throw error;
	}
}

let dao = {
	fetchTodos,
	saveTodo,
};

export { dao };
