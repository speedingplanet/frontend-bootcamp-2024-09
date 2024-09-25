import React, { useState } from 'react';
import '../common/TodoDisplay.css';
import { Todo } from '../todos-types';
import EditTodoCustom from './EditTodoCustom';
import ActionButton from '../common/ActionButton';
import TodoDetails from '../common/TodoDetails';
import { useCustomTodosDispatch } from './custom-redux-hooks';
import { deleteTodo, editTodo } from './todos-slice';

export interface TodoDisplayProps {
	todo: Todo;
}

export default function TodoDisplayCustom({ todo }: TodoDisplayProps) {
	const [isEditing, setIsEditing] = useState(false);
	const dispatch = useCustomTodosDispatch();

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
							editTodo({
								...todo,
								done: e.target.checked,
							})
						);
					}}
				/>
				{isEditing ? <EditTodoCustom todo={todo} /> : <TodoDetails todo={todo} />}
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
