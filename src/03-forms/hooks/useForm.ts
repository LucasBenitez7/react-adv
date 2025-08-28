import { ChangeEvent, FormEvent, useMemo, useState } from "react";

export type FormData = {
	name: string;
	email: string;
	password: string;
	passwordConfirm: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialState: FormData = {
	name: "",
	email: "",
	password: "",
	passwordConfirm: "",
};

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,}$/i;

export const validate = (data: FormData) => {
	const errors: Partial<Record<keyof FormData, string>> = {};
	if (!data.name.trim()) errors.name = "Campo requerido";
	else if (data.name.length < 3 || data.name.length > 12) errors.name = "Debe ser de 3 a 12 caracteres";
	if (!data.email.trim()) errors.email = "Email no válido";
	else if (!EMAIL_REGEX.test(data.email)) errors.email = "Email no válido";
	if (!data.password.trim()) errors.password = "Mínimo 6 caracteres";
	if (!data.passwordConfirm.trim())
		errors.passwordConfirm = "Mínimo 6 caracteres";
	if (
		data.password &&
		data.passwordConfirm &&
		data.password !== data.passwordConfirm
	) {
		errors.passwordConfirm = "Las contraseñas no coinciden";
	}
	if (data.password && data.password.length < 6)
		errors.password = "Mínimo 6 caracteres";
	return errors;
};

export const useForm = () => {
	const [formData, setFormData] = useState<FormData>(initialState);
	const [errors, setErrors] = useState<Errors>({});

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: undefined }));
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const v = validate(formData);
		setErrors(v);
		if (Object.keys(v).length > 0) return;

		setFormData(initialState);
		setErrors({});
	};

	const reset = () => {
		setFormData(initialState);
		setErrors({});
	};

	const isInvalid = useMemo(
		() => Object.keys(validate(formData)).length > 0,
		[formData]
	);

	return {
		...formData,
		formData,
		errors,
		isInvalid,
		onInputChange,
		onSubmit,
		reset,
	};
};
