import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface onProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: onProductArgs) => {
	const [counter, setcounter] = useState(value);

	const increaseBy = (delta: number) => {
		const newValue = Math.max(counter + delta, 0);

		setcounter(newValue);

		onChange?.({ count: newValue, product });
	};

	useEffect(() => {
		setcounter(value);
	}, [value]);

	return {
		counter,
		increaseBy,
	};
};
