import { Formik, Form } from "formik";
import * as Yup from "yup";
import data from "../data/custom-form.json";
import { MySelect, MyTextinput } from "../components";

type BaseValidation =
	| { type: "required"; value: boolean; message?: string }
	| { type: "min"; value: number; message?: string }
	| { type: "max"; value: number; message?: string }
	| { type: "email"; value: boolean; message?: string }
	| { type: "matches"; value: string; message?: string };

type FieldCommon = {
	type: "input" | "select";
	name: string;
	label: string;
	value: string;
	placeholder?: string;
	validations?: BaseValidation[];
};

type SelectField = FieldCommon & {
	type: "select";
	options: Array<{ id: number | string; label: string }>;
};

type InputField = FieldCommon & { type: "input" };

type Field = InputField | SelectField;

const fields = data as Field[];

const initialValues = fields.reduce<Record<string, any>>((acc, item) => {
	acc[item.name] = item.value ?? "";
	return acc;
}, {});

const getRule = <T extends BaseValidation["type"]>(
	rules: BaseValidation[] | undefined,
	type: T
) =>
	rules?.find((r) => r.type === type) as
		| Extract<BaseValidation, { type: T }>
		| undefined;

const schemaByField = (f: Field) => {
	if (f.type === "input") {
		let s = Yup.string().transform((v) =>
			typeof v === "string" ? v.trim() : v
		);

		const rules = f.validations;
		const req = getRule(rules, "required");
		if (req?.value) {
			s = s.required(req.message || "Campo requerido");
		}

		const email = getRule(rules, "email");
		if (email?.value) s = s.email(email.message || "Formato de email inválido");

		const min = getRule(rules, "min");
		if (min)
			s = s.min(min.value, min.message || `Mínimo ${min.value} caracteres`);

		const max = getRule(rules, "max");
		if (max)
			s = s.max(max.value, max.message || `Máximo ${max.value} caracteres`);

		const matches = getRule(rules, "matches");
		if (matches?.value) {
			try {
				const re = new RegExp(matches.value);
				s = s.matches(re, matches.message || "Formato inválido");
			} catch {}
		}

		return s;
	}

	const optionValues = (f.options ?? []).map((o) => String(o.id));
	let s = Yup.string();

	const rules = f.validations;
	const req = getRule(rules, "required");
	if (req?.value) {
		s = s.required(req.message || "Seleccione una opción");
	}

	if (optionValues.length > 0) {
		s = s.test(
			"one-of-or-empty",
			"Opción inválida",
			(val) =>
				(val === "" && !req?.value) || optionValues.includes(String(val ?? ""))
		);
	}

	return s;
};

const validationSchema = Yup.object(
	fields.reduce<Record<string, Yup.AnySchema>>((acc, f) => {
		acc[f.name] = schemaByField(f);
		return acc;
	}, {})
);

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Form (Yup)</h1>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async (vals, { setSubmitting, resetForm }) => {
					try {
						console.log("submit start", vals);
            resetForm();
					} catch (err) {
						console.error("submit error", err);
					} finally {
						setSubmitting(false);
						console.log("submit end");
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form noValidate>
						{fields.map((item) => {
							if (item.type === "select") {
								const s = item as SelectField;
								return (
									<MySelect key={s.name} name={s.name} label={s.label}>
										<option value="">Seleccione una opción</option>
										{s.options.map((opt) => (
											<option key={opt.id} value={String(opt.id)}>
												{opt.label}
											</option>
										))}
									</MySelect>
								);
							}

							return (
								<MyTextinput
									key={item.name}
									name={item.name}
									label={item.label}
									placeholder={item.placeholder}
								/>
							);
						})}

						<div className="btn-container">
							<button type="submit" disabled={isSubmitting}>
								{isSubmitting ? "Enviando…" : "Enviar"}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
