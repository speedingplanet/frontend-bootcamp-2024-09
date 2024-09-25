import React, { Reducer, useReducer } from 'react';
import AddTodo from '../plain/AddTodo';
import TodoList from '../plain/TodoList';
import { Todo, TodoAction } from '../todos';

let nextId = 4;
const initialTodos: Array<Todo> = [
	{ id: 1, text: 'Groceries', done: false },
	{ id: 2, text: 'Change oil', done: true },
	{ id: 3, text: 'Clean kitchen table', done: false },
];

const reducer: Reducer<Array<Todo>, TodoAction> = (state, action) => {
	switch (action.type) {
		case 'todos/add':
			return [
				...state,
				{
					id: nextId++,
					text: action.text,
					done: false,
				},
			];
		case 'todos/change':
			return state.map((t) => {
				if (t.id === action.todo.id) {
					return action.todo;
				} else {
					return t;
				}
			});
		case 'todos/delete':
			return state.filter((t) => t.id !== action.todoId);
		default:
			throw Error(`No case found!`);
	}
};

const TodosReducerContainer = () => {
	const [todos, dispatch] = useReducer(reducer, initialTodos);

	return (
		<section>
			<header className="row mb-2">
				<div className="col">
					<h3>Todos (reducer version)</h3>
				</div>
			</header>
			<AddTodo onAddTodo={(text) => dispatch({ type: 'todos/add', text })} />
			<TodoList
				todos={todos}
				onChangeTodo={(todo) => dispatch({ type: 'todos/change', todo })}
				onDeleteTodo={(todoId) => dispatch({ type: 'todos/delete', todoId })}
			/>
		</section>
	);
};

export default TodosReducerContainer;
