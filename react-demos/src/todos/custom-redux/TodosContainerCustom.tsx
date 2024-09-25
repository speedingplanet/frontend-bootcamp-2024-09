import { Provider } from 'react-redux';
import AddTodoCustom from './AddTodoCustom';
import TodoListCustom from './TodoListCustom';
import { store } from './configure-store';

const TodosContainerCustom = () => {
	return (
		<Provider store={store}>
			<section>
				<header className="row mb-2">
					<div className="col">
						<h3>Todos (custom version)</h3>
					</div>
				</header>
				<AddTodoCustom />
				<TodoListCustom />
			</section>
		</Provider>
	);
};

export default TodosContainerCustom;
