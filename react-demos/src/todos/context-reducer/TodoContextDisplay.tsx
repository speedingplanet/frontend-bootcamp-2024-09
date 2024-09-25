import React, { useContext, useState } from 'react';
import '../plain/TodoDisplay.css';
import { DispatchContext } from './TodosContextContainer';

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

	// Either the label or the form field
	let todoContent;

	// Edit or Save
	let actionButton;

	if (isEditing) {
		todoContent = (
			<div className="me-2">
				<input
					type="text"
					value={todo.text}
					onChange={(e) => {
						dispatch({
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
		actionButton = (
			<div>
				<button
					className="btn btn-secondary btn-small btn-really-small"
					onClick={() => setIsEditing(false)}
				>
					Save
				</button>
			</div>
		);
	} else {
		todoContent = (
			<div>
				<label
					htmlFor={`todo-${todo.id}`}
					className="form-check-label"
				>
					{todo.text}
				</label>
			</div>
		);
		actionButton = (
			<div>
				<button
					className="btn btn-info btn-small btn-really-small"
					onClick={() => setIsEditing(true)}
				>
					Edit
				</button>
			</div>
		);
	}
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
				{todoContent}
			</div>
			{actionButton}

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
