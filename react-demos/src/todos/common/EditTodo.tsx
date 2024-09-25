import React from 'react';
import { Todo } from '../todos-types';

interface EditTodoProps {
	todo: Todo;
	onChangeTodo: (todo: Todo) => void;
}

function EditTodo({ todo, onChangeTodo }: EditTodoProps) {
	return (
		<div className="me-2">
			<input
				type="text"
				value={todo.text}
				onChange={(e) => {
					onChangeTodo({
						...todo,
						text: e.target.value,
					});
				}}
			/>
		</div>
	);
}

export default EditTodo;
