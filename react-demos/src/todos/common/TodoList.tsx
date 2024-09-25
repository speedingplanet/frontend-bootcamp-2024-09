import React from 'react';
import TodoDisplay, { TodoDisplayProps } from './TodoDisplay';
import { Todo } from '../todos-types';

type TodoListProps = Omit<TodoDisplayProps, 'todo'> & {
	todos: Array<Todo>;
};

export default function TodoList({ todos, onChangeTodo, onDeleteTodo }: TodoListProps) {
	return (
		<>
			<h4>Todos</h4>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<TodoDisplay
							todo={todo}
							onChangeTodo={onChangeTodo}
							onDeleteTodo={onDeleteTodo}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
