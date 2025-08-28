import * as Yup from "yup";
import { useFormik } from "formik";
import "../styles/styles.css";

const schema = Yup.object({
	firstName: Yup.string()
		.transform((v) => (typeof v === "string" ? v.trim() : v))
		.min(2, "Mínimo 2 caracteres")
		.max(15, "Máximo 15 caracteres")
		.required("Requerido"),
	lastName: Yup.string()
		.transform((v) => (typeof v === "string" ? v.trim() : v))
		.min(2, "Mínimo 2 caracteres")
		.max(15, "Máximo 15 caracteres")
		.required("Requerido"),
	email: Yup.string()
		.transform((v) => (typeof v === "string" ? v.trim().toLowerCase() : v))
		.email("Email inválido")
		.required("Requerido"),
	password: Yup.string()
		.min(8, "Mínimo 8 caracteres")
		.matches(/[a-z]/, "Incluye una minúscula")
		.matches(/[A-Z]/, "Incluye una mayúscula")
		.matches(/\d/, "Incluye un número")
		.matches(/[^A-Za-z0-9]/, "Incluye un símbolo")
		.required("Requerido"),
	passwordConfirm: Yup.string()
		.oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
		.required("Requerido"),
});

type FormikData = Yup.InferType<typeof schema>;

const initialValues: FormikData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	passwordConfirm: "",
};

export const FormikYupPage = () => {
	const { errors, touched, handleReset, handleSubmit, getFieldProps } = useFormik<FormikData>({
		initialValues,
		validationSchema: schema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: (vals) => {
			console.log(vals);
		},
	});

	return (
		<div className="form-container">
			<h1 className="form-title">Formik Yup</h1>

			<form className="form-submit" onSubmit={handleSubmit} noValidate>
				<label htmlFor="firstName">First Name</label>
				<input type="text" {...getFieldProps("firstName")} />
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor="lastName">Last Name</label>
				<input type="text" {...getFieldProps("lastName")} />
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="email">Email</label>
				<input type="email" {...getFieldProps("email")} />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<label htmlFor="password">Password</label>
				<input type="password" {...getFieldProps("password")} />
				{touched.password && errors.password && <span>{errors.password}</span>}

				<label htmlFor="passwordConfirm">Password Confirm</label>
				<input type="password" {...getFieldProps("passwordConfirm")} />
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
