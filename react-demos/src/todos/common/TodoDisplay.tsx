import React, { useState } from 'react';
import './TodoDisplay.css';
import { Todo } from '../todos-types';
import EditTodo from './EditTodo';
import ActionButton from './ActionButton';
import TodoDetails from './TodoDetails';

export interface TodoDisplayProps {
	todo: Todo;
	onChangeTodo: (todo: Todo) => void;
	onDeleteTodo: (todoId: number) => void;
}

export default function TodoDisplay({ todo, onChangeTodo, onDeleteTodo }: TodoDisplayProps) {
	const [isEditing, setIsEditing] = useState(false);

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
				{isEditing ? (
					<EditTodo
						todo={todo}
						onChangeTodo={onChangeTodo}
					/>
				) : (
					<TodoDetails todo={todo} />
				)}
			</div>
			{isEditing ? (
				<ActionButton
					className="btn-secondary"
					handleClick={() => setIsEditing(false)}
				>
					Save
				</ActionButton>
			) : (
				<ActionButton
					className="btn-info"
					handleClick={() => setIsEditing(true)}
				>
					Edit
				</ActionButton>
			)}

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
