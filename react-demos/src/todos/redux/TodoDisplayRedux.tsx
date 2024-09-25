import React, { useState } from 'react';
import '../common/TodoDisplay.css';
import { changeTodo, deleteTodo } from './todos-slice';
import { Todo } from '../todos-types';
import { useTodosDispatch } from './todos-hooks';
import ActionButton from '../common/ActionButton';
import TodoDetails from '../common/TodoDetails';

export default function TodoDisplayRedux({ todo }: { todo: Todo }) {
	const [isEditing, setIsEditing] = useState(false);
	const [localTodoText, setLocalTodoText] = useState(todo.text);
	const dispatch = useTodosDispatch();

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
				{isEditing ? (
					<div className="me-2">
						<input
							type="text"
							value={localTodoText}
							onChange={(e) => {
								setLocalTodoText(e.target.value);
							}}
						/>
					</div>
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
					onClick={() => dispatch(deleteTodo(todo.id))}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
