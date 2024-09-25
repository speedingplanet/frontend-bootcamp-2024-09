import React from 'react';
import { Todo } from '../todos-types';
import { useCustomTodosDispatch } from './custom-redux-hooks';
import { editTodo } from './todos-slice';

interface EditTodoProps {
	todo: Todo;
}

function EditTodoCustom({ todo }: EditTodoProps) {
	const dispatch = useCustomTodosDispatch();

	return (
		<div className="me-2">
			<input
				type="text"
				value={todo.text}
				onChange={(e) => {
					dispatch(
						editTodo({
							...todo,
							text: e.target.value,
						})
					);
				}}
			/>
		</div>
	);
}

export default EditTodoCustom;
