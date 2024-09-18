import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import './App.css';
import LabManager from './labs/LabManager';
import ZipPayManager from './zippay/ZipPayManager';
import CalculatorApp from './calculator/CalculatorApp';

function App() {
	return (
		<main>
			<BrowserRouter>
				<nav className="flatnav">
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/labs">Labs</NavLink>
						</li>
						<li>
							<NavLink to="/calculator">Calculator</NavLink>
						</li>
						<li>
							<NavLink to="/zippay">ZipPay</NavLink>
						</li>
					</ul>
				</nav>
				<hr style={{ marginTop: '5px' }} />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="labs/*"
						element={<LabManager />}
					/>
					<Route
						path="zippay/*"
						element={<ZipPayManager />}
					/>
					<Route
						path="calculator"
						element={<CalculatorApp />}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
