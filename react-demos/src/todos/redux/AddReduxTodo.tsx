import React, { useState } from 'react';
import { useTodosDispatch } from './todos-hooks';
import { saveTodo } from './todos-slice';

export default function AddTodo() {
	const [text, setText] = useState('');
	const dispatch = useTodosDispatch();

	return (
		<div className="row mb-4">
			<div className="col">
				<input
					placeholder="Add todo"
					className="form-control"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="col">
				<button
					className="btn btn-primary btn-small"
					onClick={() => {
						setText('');
						dispatch(saveTodo(text));
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
}
