import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
	return (
		<div className="lazy-layout">
			<h2>Lazy Layout</h2>
			<ul>
				<li>
					<NavLink className="nav-link" to="lazyPage1">
						Lazy Page 1
					</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" to="lazyPage2">
						Lazy Page 2
					</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" to="lazyPage3">
						Lazy Page 3
					</NavLink>
				</li>
			</ul>

			<Routes>
				<Route path="lazyPage1" element={<LazyPage1 />} />
				<Route path="lazyPage2" element={<LazyPage2 />} />
				<Route path="lazyPage3" element={<LazyPage3 />} />

				<Route path="*" element={<Navigate replace to="lazyPage1" />} />
			</Routes>
		</div>
	);
};

export default LazyLayout;
