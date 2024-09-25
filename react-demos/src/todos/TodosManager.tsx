import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import TodosContainer from './plain/TodosContainer';
import TodosContainerReducer from './reducer/TodosContainerReducer';
import TodosContainerContext from './context-reducer/TodosContainerContext';
import TodosContainerRedux from './redux/TodosContainerRedux';
import TodosContainerCustom from './custom-redux/TodosContainerCustom';

const TodosManager = () => {
	return (
		<>
			<div className="row">
				<div className="col-4">
					<ul className="list-unstyled">
						<li>
							<NavLink to="plain">
								With <code>useState</code>
							</NavLink>
						</li>
						<li>
							<NavLink to="reducer">
								With <code>useReducer</code>
							</NavLink>
						</li>
						<li>
							<NavLink to="context-reducer">
								With <code>useReducer</code> and <code>useContext</code>
							</NavLink>
						</li>
						<li>
							<NavLink to="redux">Using Redux</NavLink>
						</li>
						<li>
							<NavLink to="redux-custom">Using Custom Redux</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="plain"
							element={<TodosContainer />}
						/>
						<Route
							path="reducer"
							element={<TodosContainerReducer />}
						/>
						<Route
							path="context-reducer"
							element={<TodosContainerContext />}
						/>
						<Route
							path="redux"
							element={<TodosContainerRedux />}
						/>
						<Route
							path="redux-custom"
							element={<TodosContainerCustom />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
};

export default TodosManager;
