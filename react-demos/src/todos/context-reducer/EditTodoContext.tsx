import React, { useContext } from 'react';
import { Todo } from '../todos-types';
import { DispatchContext } from './TodosContextContainer';

interface EditTodoProps {
	todo: Todo;
}

function EditTodoContext({ todo }: EditTodoProps) {
	const dispatch = useContext(DispatchContext);

	return (
		<div className="me-2">
			<input
				type="text"
				value={todo.text}
				onChange={(e) => {
					dispatch!({
						type: 'todos/change',
						todo: {
							...todo,
							text: e.target.value,
						},
					});
				}}
			/>
		</div>
	);
}

export default EditTodoContext;
