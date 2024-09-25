import React, { useContext, useState } from 'react';
import '../common/TodoDisplay.css';
import { DispatchContext } from './TodosContextContainer';
import ActionButtonContext from './ActionButtonContext';
import EditTodoContext from './EditTodoContext';
import TodoDetailsContext from './TodoDetailsContext';

export interface Todo {
	id: number;
	text: string;
	done: boolean;
}

export interface TodoDisplayProps {
	todo: Todo;
}

export default function TodoDisplay({ todo }: TodoDisplayProps) {
	const [isEditing, setIsEditing] = useState(false);
	const dispatch = useContext(DispatchContext);

	if (dispatch === null) throw Error('dispatch is null?!');
	return (
		<div className="d-flex mb-1">
			<div className="form-check me-1 align-self-center">
				<input
					type="checkbox"
					id={`todo-${todo.id}`}
					className="form-check-input"
					checked={todo.done}
					onChange={(e) => {
						dispatch({
							type: 'todos/change',
							todo: {
								...todo,
								done: e.target.checked,
							},
						});
					}}
				/>
				{isEditing ? <EditTodoContext todo={todo} /> : <TodoDetailsContext todo={todo} />}
			</div>
			{isEditing ? (
				<ActionButtonContext
					className="btn-secondary"
					handleClick={() => setIsEditing(false)}
				>
					Save
				</ActionButtonContext>
			) : (
				<ActionButtonContext
					className="btn-info"
					handleClick={() => setIsEditing(true)}
				>
					Edit
				</ActionButtonContext>
			)}

			<div>
				<button
					className="btn btn-danger btn-small btn-really-small"
					onClick={() => dispatch({ type: 'todos/delete', todoId: todo.id })}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
