import { useState } from 'react';
import { useCustomTodosDispatch } from './custom-redux-hooks';
import { addTodo } from './todos-slice';

export default function AddTodoCustom() {
	// Local state, used only in this component
	const [text, setText] = useState('');
	const dispatch = useCustomTodosDispatch();

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
						dispatch(addTodo({ text, done: false }));
						setText('');
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
}
