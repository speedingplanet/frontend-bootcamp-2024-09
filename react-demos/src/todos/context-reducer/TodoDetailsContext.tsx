import React from 'react';
import { Todo } from '../todos-types';

interface TodoDetailsProps {
	todo: Todo;
}

function TodoDetailsContext({ todo }: TodoDetailsProps) {
	return (
		<div>
			<label
				htmlFor={`todo-${todo.id}`}
				className="form-check-label"
			>
				{todo.text}
			</label>
		</div>
	);
}

export default TodoDetailsContext;
