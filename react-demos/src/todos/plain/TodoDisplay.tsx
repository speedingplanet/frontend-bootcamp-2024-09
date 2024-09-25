import React, { useState } from 'react';
import './TodoDisplay.css';
import { Todo } from '../todos';

export interface TodoDisplayProps {
	todo: Todo;
	onChangeTodo: (todo: Todo) => void;
	onDeleteTodo: (todoId: number) => void;
}

export default function TodoDisplay({ todo, onChangeTodo, onDeleteTodo }: TodoDisplayProps) {
	const [isEditing, setIsEditing] = useState(false);

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
						onChangeTodo({
							...todo,
							text: e.target.value,
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
						onChangeTodo({
							...todo,
							done: e.target.checked,
						});
					}}
				/>
				{todoContent}
			</div>
			{actionButton}

			<div>
				<button
					className="btn btn-danger btn-small btn-really-small"
					onClick={() => onDeleteTodo(todo.id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
