import React from 'react';
import TodoDisplayCustom from './TodoDisplayCustom';
import { Todo } from '../todos-types';
import { useSelector } from 'react-redux';
import { RootState } from './configure-store';

export default function TodoListCustom() {
	let todos = useSelector<RootState, Todo[]>((state) => state.todos);

	return (
		<>
			<h4>Todos</h4>
			<ul className="list-unstyled">
				{todos.map((todo) => (
					<li key={todo.id}>
						<TodoDisplayCustom todo={todo} />
					</li>
				))}
			</ul>
		</>
	);
}
