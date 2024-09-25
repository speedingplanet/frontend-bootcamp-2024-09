import TodoDisplayRedux from './TodoDisplayRedux';
import '../common/TodoDisplay.css';
import { useSelector } from 'react-redux';
import { orderBy } from 'lodash';
import { RootState } from './todos-store';
import { sortTodos } from './ui-slice';
import { useTodosDispatch } from './todos-hooks';

export default function TodoListRedux() {
	const displayTodos = useSelector(({ todos, ui }: RootState) => {
		if (ui.sortColumn !== null) {
			return orderBy(todos, ui.sortColumn, ui.sortDirection!);
		} else {
			return todos;
		}
	});

	const dispatch = useTodosDispatch();

	return (
		<>
			<h4>Todos</h4>
			<ul className="list-inline">
				<li className="list-inline-item">
					<button
						className="btn btn-primary btn-small btn-really-small"
						onClick={() => dispatch(sortTodos('text'))}
					>
						Sort text
					</button>
				</li>
				<li className="list-inline-item">
					<button
						className="btn btn-primary btn-small btn-really-small"
						onClick={() => dispatch(sortTodos('done'))}
					>
						Sort done
					</button>
				</li>
				<li className="list-inline-item">
					<button
						className="btn btn-primary btn-small btn-really-small"
						onClick={() => dispatch(sortTodos(null))}
					>
						Clear sort
					</button>
				</li>
			</ul>
			<ul className="list-unstyled">
				{displayTodos.map((todo) => (
					<li key={todo.id}>
						<TodoDisplayRedux todo={todo} />
					</li>
				))}
			</ul>
		</>
	);
}
