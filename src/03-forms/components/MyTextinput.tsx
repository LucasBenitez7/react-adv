import { ErrorMessage, useField } from "formik";

interface Props {
	label: string;
	name: string;
	type?: "text" | "email" | "password";
	placeholder?: string;
	[x: string]: any;
}

export const MyTextinput = ({ label, ...props }: Props) => {
	const [field] = useField(props);
  
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input type="text" className="form-control" {...field} {...props}/>
      <ErrorMessage name={props.name} component="span" />
		</>
	);
};
