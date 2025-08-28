import {
	BrowserRouter,
	Route,
	NavLink,
	Navigate,
	Routes,
} from "react-router-dom";
import {
	FormikPage,
	FormikAbstract,
	FormikComponents,
	FormikYupPage,
	RegisterPage,
	RegisterFormikPage,
	DynamicForm,
} from "../03-forms/pages";
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
								to="/register"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Register
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/register-formik"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Register Formik
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-basic"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Formik
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-yup"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-components"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-abstract"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Formik Abstract
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dynamic-form"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Dynamic Form
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/register-formik" element={<RegisterFormikPage />} />
					<Route path="/formik-basic" element={<FormikPage />} />
					<Route path="/formik-yup" element={<FormikYupPage />} />
					<Route path="/formik-components" element={<FormikComponents />} />
					<Route path="/formik-abstract" element={<FormikAbstract />} />
					<Route path="/dynamic-form" element={<DynamicForm />} />
					<Route path="/*" element={<Navigate to="/lazy1" replace />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
