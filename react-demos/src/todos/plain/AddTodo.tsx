import React, { useState } from 'react';

interface AddTodoProps {
	onAddTodo: (text: string) => void;
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
	const [text, setText] = useState('');
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
						onAddTodo(text);
						setText('');
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
}
