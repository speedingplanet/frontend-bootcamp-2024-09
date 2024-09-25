import React, { Reducer, useReducer } from 'react';
import AddTodo from '../common/AddTodo';
import TodoList from '../common/TodoList';
import { Todo, TodoAction } from '../todos-types';

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

const TodosContainerReducer = () => {
	const [todos, dispatch] = useReducer(reducer, initialTodos);

	return (
		<section>
			<header className="row mb-2">
				<div className="col">
					<h3>Todos (reducer version)</h3>
				</div>
			</header>
			{/* Alternatively, we could pass the dispatch function down to AddTodo */}
			<AddTodo onAddTodo={(text) => dispatch({ type: 'todos/add', text })} />

			{/* Same here, pass dispatch down through TodoList and its descendants */}
			<TodoList
				todos={todos}
				onChangeTodo={(todo) => dispatch({ type: 'todos/change', todo })}
				onDeleteTodo={(todoId) => dispatch({ type: 'todos/delete', todoId })}
			/>
		</section>
	);
};

export default TodosContainerReducer;
