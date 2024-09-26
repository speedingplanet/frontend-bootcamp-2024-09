import TodoDisplayCustom from './TodoDisplayCustom';
import { useAppSelector } from './custom-redux-hooks';

export default function TodoListCustom() {
	// useAppSelector is already properly typed!
	let todos = useAppSelector((state) => state.todos);

	return (
		<>
			<h4>Todos</h4>
			<ul className="list-unstyled">
				{todos.map((todo) => (
					<li key={todo.id}>
						<TodoDisplayCustom todo={todo} />
					</li>
				))}
			</ul>
		</>
	);
}
