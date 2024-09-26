import { orderBy } from 'lodash';
import ActionButton from '../common/ActionButton';
import TodoDisplayCustom from './TodoDisplayCustom';
import { useAppSelector, useCustomTodosDispatch } from './custom-redux-hooks';
import { changeSort } from './sorting-slice';
import { createRootSelector, RootState } from './configure-store';
import SortIndicator from './SortIndicator';

export default function TodoListCustom() {
	const dispatch = useCustomTodosDispatch();

	/* useAppSelector is already properly typed!

	Subscribes to the store
	Runs if the component re-renders on its own
	Runs when an action is dispatched
		- If the previous return value and the post-dispatch return value are the same
		  DOES NOT RE-RENDER
		- If they are NOT the same, DOES RE-RENDER
		- uses === for equality checks
		- Can pass a second argument for a different equality check
	*/
	const todos = useAppSelector((state) => state.todos);
	const sortConfig = useAppSelector((state) => state.sorting);
	const { sortDirection, sortField } = sortConfig;

	const displayTodos = orderBy(todos, sortField, sortDirection);

	return (
		<>
			<h4>Todos</h4>
			<ul className="list-inline">
				<li className="list-inline-item">
					<ActionButton
						className="btn-warning"
						handleClick={() => dispatch(changeSort('text'))}
					>
						Sort text{' '}
						<SortIndicator
							currentField="text"
							sortConfig={sortConfig}
						/>
					</ActionButton>
				</li>
				<li className="list-inline-item">
					<ActionButton
						className="btn-warning"
						handleClick={() => dispatch(changeSort('done'))}
					>
						Sort done{' '}
						<SortIndicator
							currentField="done"
							sortConfig={sortConfig}
						/>
					</ActionButton>
				</li>
			</ul>
			<ul className="list-unstyled">
				{displayTodos.map((todo) => (
					<li key={todo.id}>
						<TodoDisplayCustom todo={todo} />
					</li>
				))}
			</ul>
		</>
	);
}
