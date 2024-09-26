import TodoDisplayCustom from './TodoDisplayCustom';
import { useAppSelector } from './custom-redux-hooks';

export default function TodoListCustom() {
	// const todos = useSelector((state: RootState) => { return state.todos})
	// useAppSelector is already properly typed!
	const todos = useAppSelector((state) => state.todos);

	return (
		<>
			<h4>Todos</h4>
			<ul className="list-inline">
				<li className="list-inline-item">Sort by complete ^ | V</li>
				<li className="list-inline-item">Sort by done ^ | V</li>
			</ul>
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
