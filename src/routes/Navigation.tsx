import {
	BrowserRouter,
	Route,
	NavLink,
	Navigate,
	Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

const { to, path, Component, name } = routes[0];

console.log({ to, path, Component, name });

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink
								to={to}
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								{name}
							</NavLink>
						</li>
						<li>
							<NavLink
								to={to}
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								{name}
							</NavLink>
						</li>
						<li>
							<NavLink
								to={to}
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								{name}
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path={path.toString()} element={<Component />} />
					<Route path={path.toString()} element={<Component />} />
					<Route path={path.toString()} element={<Component />} />
					<Route path="/*" element={<Navigate to={to} replace />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
