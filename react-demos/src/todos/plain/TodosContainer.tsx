import { useState } from 'react';
import AddTodo from '../common/AddTodo';
import TodoList from '../common/TodoList';
import { Todo } from '../todos-types';

let nextId = 4;
const initialTodos: Array<Todo> = [
	{ id: 1, text: 'Groceries', done: false },
	{ id: 2, text: 'Change oil', done: true },
	{ id: 3, text: 'Clean kitchen table', done: false },
];

const TodosContainer = () => {
	const [todos, setTodos] = useState(initialTodos);

	const handleAddTodo = (text: string) => {
		setTodos([
			...todos,
			{
				id: nextId++,
				text: text,
				done: false,
			},
		]);
	};

	const handleChangeTodo = (todo: Todo) => {
		setTodos(
			todos.map((t) => {
				if (t.id === todo.id) {
					return todo;
				} else {
					return t;
				}
			})
		);
	};

	const handleDeleteTodo = (todoId: number) => {
		setTodos(todos.filter((t) => t.id !== todoId));
	};

	return (
		<section>
			<header className="row mb-2">
				<div className="col">
					<h3>Todos (plain version)</h3>
				</div>
			</header>
			<AddTodo onAddTodo={handleAddTodo} />
			<TodoList
				todos={todos}
				onChangeTodo={handleChangeTodo}
				onDeleteTodo={handleDeleteTodo}
			/>
		</section>
	);
};

export default TodosContainer;
