import {
	BrowserRouter,
	Route,
	NavLink,
	Navigate,
	Routes,
} from "react-router-dom";

import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink
								to="/lazy1"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Lazy 1 Title
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazy2"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Lazy 2 Title
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazy3"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Lazy 3 Title
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/lazy1" element={<h1>Lazy 1 Page</h1>} />
					<Route path="/lazy2" element={<h1>Lazy 2 Page</h1>} />
					<Route path="/lazy3" element={<h1>Lazy 3 Page</h1>} />
					<Route path="/*" element={<Navigate to="/lazy1" replace />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
