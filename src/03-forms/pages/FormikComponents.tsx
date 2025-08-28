import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
	terms: Yup.boolean().oneOf([true], "Acepta los terminos y condiciones"),
	jopType: Yup.string().required("Requerido"),
});

type FormikData = Yup.InferType<typeof schema>;

const initialValues: FormikData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	passwordConfirm: "",
	terms: false,
	jopType: "",
};

export const FormikComponents = () => {
	return (
		<div className="form-container">
			<h1 className="form-title">Formik Components</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={(vals) => {
					console.log(vals);
				}}
				validationSchema={schema}
				validateOnChange
				validateOnBlur
			>
				{(formik) => (
					<Form className="form-submit" noValidate>
						<label htmlFor="firstName">First Name</label>
						<Field type="text" name="firstName" />
						<ErrorMessage name="firstName" component="span" />

						<label htmlFor="lastName">Last Name</label>
						<Field type="text" name="lastName" />
						<ErrorMessage name="lastName" component="span" />

						<label htmlFor="email">Email</label>
						<Field type="email" name="email" />
						<ErrorMessage name="email" component="span" />

						<label htmlFor="password">Password</label>
						<Field type="password" name="password" />
						<ErrorMessage name="password" component="span" />

						<label htmlFor="passwordConfirm">Password Confirm</label>
						<Field type="password" name="passwordConfirm" />
						<ErrorMessage name="passwordConfirm" component="span" />

						<label htmlFor="jopType">Jop Type</label>
						<Field as="select" name="jopType" value={formik.values.jopType}>
							<option value="">Seleccione algo</option>
							<option value="react">React</option>
							<option value="javaScript">JavaScript</option>
							<option value="typeScript">TypeScript</option>
							<option value="python">Python</option>
						</Field>
						<ErrorMessage name="jopType" component="span" />

						<label htmlFor="terms">
							Terminos y condiciones
							<Field type="checkbox" name="terms" />
							<ErrorMessage name="terms" component="span" />
						</label>
						
						<div className="btn-container">
							<button type="submit">Submit</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
