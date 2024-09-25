import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import SingleFileReduxCounter from './SingleFileReduxCounter';
import ReduxContainer from './redux-counter-old/ReduxContainer';
import ReduxToolkitContainer from './redux-counter-toolkit/ReduxToolkitContainer';

function ReduxDemosManager() {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<NavLink to="toolkit">Redux Toolkit</NavLink>
						</li>
						<li>
							<NavLink to="single-file">Redux (one file)</NavLink>
						</li>
						<li>
							<NavLink to="old-style">Redux (old style)</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="single-file"
							element={<SingleFileReduxCounter />}
						/>
						<Route
							path="old-style"
							element={<ReduxContainer />}
						/>
						<Route
							path="toolkit"
							element={<ReduxToolkitContainer />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default ReduxDemosManager;
