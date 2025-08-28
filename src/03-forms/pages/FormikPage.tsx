import { useFormik, FormikErrors } from "formik";
import "../styles/styles.css";

export type FormikData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	passwordConfirm: string;
};

const initialValues: FormikData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	passwordConfirm: "",
};

const EMAIL_REGEX =
	/^[A-Z0-9._%+-]+@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,}$/i;

export const FormikPage = () => {
	const validate = (values: FormikData): FormikErrors<FormikData> => {
		const errors: Partial<FormikData> = {};
		if (!values.firstName.trim()) errors.firstName = "Campo requerido";
		else if (values.firstName.length < 2 || values.firstName.length > 12)
			errors.firstName = "Debe ser de 2 a 12 caracteres";
		if (!values.lastName.trim()) errors.lastName = "Campo requerido";
		else if (values.lastName.length < 2 || values.lastName.length > 18)
			errors.lastName = "Debe ser de 2 a 18 caracteres";
		if (!values.email.trim()) errors.email = "Email no válido";
		else if (!EMAIL_REGEX.test(values.email)) errors.email = "Email no válido";
		if (!values.password.trim()) errors.password = "Mínimo 6 caracteres";
		if (!values.passwordConfirm.trim())
			errors.passwordConfirm = "Mínimo 6 caracteres";
		if (
			values.password &&
			values.passwordConfirm &&
			values.password !== values.passwordConfirm
		) {
			errors.passwordConfirm = "Las contraseñas no coinciden";
		}
		if (values.password && values.password.length < 6)
			errors.password = "Mínimo 6 caracteres";
		return errors;
	};

	const {
		handleChange,
		handleReset,
		handleSubmit,
		handleBlur,
		values,
		errors,
		touched,
	} = useFormik<FormikData>({
		initialValues,
		onSubmit: (vals) => {
			console.log(vals);
		},
		validate,
	});

	return (
		<div className="form-container">
			<h1 className="form-title">Formik Basic</h1>
			<form className="form-submit" onSubmit={handleSubmit} noValidate>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					name="firstName"
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.firstName}
				/>
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					name="lastName"
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.lastName}
				/>
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.email}
				/>
				{touched.email && errors.email && <span>{errors.email}</span>}

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.password}
				/>
				{touched.password && errors.password && <span>{errors.password}</span>}

				<label htmlFor="passwordConfirm">Password Confirm</label>
				<input
					type="password"
					name="passwordConfirm"
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.passwordConfirm}
				/>
				{touched.passwordConfirm && errors.passwordConfirm && (
					<span>{errors.passwordConfirm}</span>
				)}

				<div className="btn-container">
					<button type="submit">Submit</button>
					<button onClick={handleReset} type="button">
						Reset
					</button>
				</div>
			</form>
		</div>
	);
};
