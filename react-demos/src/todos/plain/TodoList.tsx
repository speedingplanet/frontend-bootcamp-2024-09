import React from 'react';
import TodoDisplay, { TodoDisplayProps } from './TodoDisplay';
import { Todo } from '../todos';

type TodoListProps = Omit<TodoDisplayProps, 'todo'> & {
	todos: Array<Todo>;
};

// export default function TodoList({ todos, onChangeTodo, onDeleteTodo }: TodoListProps) {
export default function TodoList({ todos, ...remainingProps }: TodoListProps) {
	return (
		<>
			<h4>Todos</h4>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{/* <TodoDisplay
							todo={todo}
							onChangeTodo={onChangeTodo}
							onDeleteTodo={onDeleteTodo}
						/> */}
						<TodoDisplay
							todo={todo}
							{...remainingProps}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
