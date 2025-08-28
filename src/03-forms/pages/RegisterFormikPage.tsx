import * as Yup from "yup";
import { Formik, Form } from "formik";
import "../styles/styles.css";
import { MyCheckbox, MyTextinput } from "../components";

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
	terms: Yup.boolean().oneOf([true], "Acepta los terminos y condiciones")
});

type FormikData = Yup.InferType<typeof schema>;

const initialValues: FormikData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	passwordConfirm: "",
	terms: false,
};

export const RegisterFormikPage = () => {
	return (
		<div className="form-container">
			<h1 className="form-title">Register Formik Page</h1>

			<Formik
				initialValues={initialValues}
				validationSchema={schema}
				validateOnChange
				validateOnBlur
				validateOnMount
				onSubmit={async (vals, { setSubmitting }) => {
					try {
						console.log(vals);
					} finally {
						setSubmitting(false);
					}
				}}
			>
				{({ handleReset }) => (
					<Form className="form-submit" noValidate>
						<MyTextinput label="First Name" name="firstName" />

						<MyTextinput label="Last Name" name="lastName" />

						<MyTextinput label="Email" name="email" type="email" />

						<MyTextinput label="Password" name="password" type="password" />

						<MyTextinput
							label="Password Confirm"
							name="passwordConfirm"
							type="password"
						/>

						<MyCheckbox name="terms" label="Terminos y condiciones" />

						<div className="btn-container">
							<button type="submit">Submit</button>
							<button type="reset" onClick={handleReset}>
								Reset
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
