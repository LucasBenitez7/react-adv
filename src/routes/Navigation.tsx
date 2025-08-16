import {
	BrowserRouter,
	Route,
	NavLink,
	Navigate,
	Routes,
} from "react-router-dom";

import logo from "../logo.svg";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink
								to="/shopping"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Shopping
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/users"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Users
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/home"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								About
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/shopping" element={<ShoppingPage />} />
					<Route path="/users" element={<h1>Users</h1>} />
					<Route path="/home" element={<h1>Home</h1>} />
					<Route path="/*" element={<Navigate to="/lazy1" replace />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
