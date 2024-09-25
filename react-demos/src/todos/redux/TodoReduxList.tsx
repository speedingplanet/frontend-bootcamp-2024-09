import React from 'react';
import TodoDisplay from './TodoReduxDisplay';
import '../plain/TodoDisplay.css';
import { useDispatch, useSelector } from 'react-redux';
import { orderBy } from 'lodash';
import { RootState } from './todos-store';
import { sortTodos } from './ui-slice';

export default function TodoList() {
	const todos = useSelector((state: RootState) => state.todos);
	const sortConfig = useSelector((state: RootState) => state.ui);

	const dispatch = useDispatch();

	let displayTodos = todos;

	if (sortConfig.sortColumn !== null) {
		displayTodos = orderBy(todos, sortConfig.sortColumn, sortConfig.sortDirection!);
	}

	return (
		<>
			<h4>Todos</h4>
			<ul className="list-inline">
				<li className="list-inline-item">
					<button
						className="btn btn-primary btn-small btn-really-small"
						onClick={() => dispatch(sortTodos('text'))}
					>
						Sort text
					</button>
				</li>
				<li className="list-inline-item">
					<button
						className="btn btn-primary btn-small btn-really-small"
						onClick={() => dispatch(sortTodos('done'))}
					>
						Sort done
					</button>
				</li>
				<li className="list-inline-item">
					<button
						className="btn btn-primary btn-small btn-really-small"
						onClick={() => dispatch(sortTodos(null))}
					>
						Clear sort
					</button>
				</li>
			</ul>
			<ul>
				{displayTodos.map((todo) => (
					<li key={todo.id}>
						<TodoDisplay todo={todo} />
					</li>
				))}
			</ul>
		</>
	);
}
