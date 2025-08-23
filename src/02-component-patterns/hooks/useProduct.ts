import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface onProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: onProductArgs) => {
	const [counter, setcounter] = useState(value);

	const isControlled = useRef(!!onChange);

	const increaseBy = (value: number) => {
		if (isControlled.current) {
			return onChange!({ count: value, product });
		}
		const newValue = Math.max(counter + value, 0);

		setcounter(newValue);

		onChange && onChange({ count: newValue, product });
	};

	useEffect(() => {
		setcounter(value);
	}, [value]);

	return {
		counter,
		increaseBy,
	};
};
