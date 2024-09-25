import React, { useContext } from 'react';
import TodoDisplay from './TodoContextDisplay';
import { TodosContext } from './TodosContextContainer';

export default function TodoList() {
	let todos = useContext(TodosContext);

	return (
		<>
			<h4>Todos</h4>
			<ul>
				{todos!.map((todo) => (
					<li key={todo.id}>
						<TodoDisplay todo={todo} />
					</li>
				))}
			</ul>
		</>
	);
}
