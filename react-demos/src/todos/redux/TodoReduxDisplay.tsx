import React, { useState } from 'react';
import '../common/TodoDisplay.css';
import { useDispatch } from 'react-redux';
import { changeTodo, deleteTodo } from './todos-slice';
import { Todo } from '../todos-types';

export default function TodoDisplay({ todo }: { todo: Todo }) {
	const [isEditing, setIsEditing] = useState(false);
	const [localTodoText, setLocalTodoText] = useState(todo.text);
	const dispatch = useDispatch();

	// Either the label or the form field
	let todoContent;

	// Edit or Save
	let actionButton;

	if (isEditing) {
		todoContent = (
			<div className="me-2">
				<input
					type="text"
					value={localTodoText}
					onChange={(e) => {
						setLocalTodoText(e.target.value);
					}}
				/>
			</div>
		);
		actionButton = (
			<div>
				<button
					className="btn btn-secondary btn-small btn-really-small"
					onClick={() => {
						setIsEditing(false);
						dispatch(changeTodo({ ...todo, text: localTodoText }));
					}}
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
						dispatch(
							changeTodo({
								...todo,
								done: e.target.checked,
							})
						);
					}}
				/>
				{todoContent}
			</div>
			{actionButton}

			<div>
				<button
					className="btn btn-danger btn-small btn-really-small"
					onClick={() => dispatch(deleteTodo(todo.id))}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
