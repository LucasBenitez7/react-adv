import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MyTextinput, MyCheckbox, MySelect } from "../components";
import "../styles/styles.css";

const schema = Yup.object({
	firstName: Yup.string()
		.trim()
		.min(2, "Mínimo 2 caracteres")
		.required("Requerido"),
	lastName: Yup.string()
		.trim()
		.min(2, "Mínimo 2 caracteres")
		.required("Requerido"),
	email: Yup.string().trim().email("Email inválido").required("Requerido"),
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

export const FormikAbstract = () => {
	return (
		<div className="formik-container">
			<h1 className="formik-title">Formik Abstract</h1>
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
					<Form className="formik-form" noValidate>
						<MyTextinput label="First Name" name="firstName"/>
						
						<MyTextinput label="Last Name" name="lastName"/>

						<MyTextinput label="Email" name="email" type="email"/>

						<MyTextinput label="Password" name="password" type="password"/>

						<MyTextinput label="Password Confirm" name="passwordConfirm" type="password"/>

						<MySelect name="jopType"  label="Jop Type">
							<option value="">Seleccione algo</option>
							<option value="react">React</option>
							<option value="javaScript">JavaScript</option>
							<option value="typeScript">TypeScript</option>
							<option value="python">Python</option>
						</MySelect>

						<MyCheckbox name="terms" label="Terminos y condiciones"/>

						<div className="btn-container">
							<button type="submit">Submit</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
