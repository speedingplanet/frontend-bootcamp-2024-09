import React, { useContext } from 'react';
import TodoDisplayContext from './TodoDisplayContext';
import { TodosContext } from './TodosContextContainer';

export default function TodoListContext() {
	let todos = useContext(TodosContext);

	return (
		<>
			<h4>Todos</h4>
			<ul>
				{todos!.map((todo) => (
					<li key={todo.id}>
						<TodoDisplayContext todo={todo} />
					</li>
				))}
			</ul>
		</>
	);
}
