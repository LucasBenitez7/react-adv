import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface onProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: onProductArgs) => {
	const [counter, setcounter] = useState(0);

	const increaseBy = (value: number) => {
		const newValue = Math.max(counter + value, 0);

		setcounter(newValue);
		
		onChange && onChange({ count: newValue, product });
	};

	return {
		counter,
		increaseBy,
	};
};
