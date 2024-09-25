import React, { Reducer, createContext, useReducer } from 'react';
import AddTodo from './AddContextTodo';
import TodoList from './TodoContextList';
import { Todo, TodoAction } from '../todos';

export const TodosContext = createContext<Array<Todo> | null>(null);
export const DispatchContext = createContext<React.Dispatch<TodoAction> | null>(null);

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

const TodosContextContainer = () => {
	const [todos, dispatch] = useReducer(reducer, initialTodos);

	return (
		<DispatchContext.Provider value={dispatch}>
			<TodosContext.Provider value={todos}>
				<section>
					<header className="row mb-2">
						<div className="col">
							<h3>Todos (context and reducer version)</h3>
						</div>
					</header>
					<AddTodo />
					<TodoList />
				</section>
			</TodosContext.Provider>
		</DispatchContext.Provider>
	);
};

export default TodosContextContainer;
