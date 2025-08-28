import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
	const {
		onInputChange,
		onSubmit,
		reset,
		name,
		email,
		password,
		passwordConfirm,
		errors,
	} = useForm();

	return (
		<div>
			<h1>Register Page</h1>
			<form onSubmit={onSubmit} noValidate>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={name}
					onChange={onInputChange}
					required
					autoComplete="name"
					className={errors.name && "has-error"}
				/>
				{errors.name && <span>{errors.name}</span>}

				<input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={onInputChange}
					required
					autoComplete="email"
					className={errors.email && "has-error"}
				/>
				{errors.email && <span>{errors.email}</span>}

				<input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={onInputChange}
					required
					autoComplete="new-password"
					className={errors.password && "has-error"}
				/>
				{errors.password && <span>{errors.password}</span>}

				<input
					type="password"
					name="passwordConfirm"
					placeholder="Password Confirm"
					value={passwordConfirm}
					onChange={onInputChange}
					required
					autoComplete="new-password"
					className={errors.passwordConfirm && "has-error"}
				/>
				{errors.passwordConfirm && <span>{errors.passwordConfirm}</span>}

				<div className="btn-container">
					<button type="submit">Create</button>
					<button onClick={reset} type="button">Reset</button>
				</div>
			</form>
		</div>
	);
};
