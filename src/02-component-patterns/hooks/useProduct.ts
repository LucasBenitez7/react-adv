import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product, InitialValues } from "../interfaces/interfaces";

interface UseProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({
	onChange,
	product,
	value,
	initialValues,
}: UseProductArgs) => {
	const maxCount = initialValues?.maxCount;
	const clamp = (n: number) => {
		const upper = maxCount != null ? Math.min(n, maxCount) : n;
		return Math.max(upper, 0);
	};

	const [counter, setCounter] = useState<number>(() =>
		clamp(value ?? initialValues?.count ?? 0)
	);

	const isMounted = useRef(false);

	const increaseBy = (delta: number) => {
		const newValue = clamp(counter + delta);
		if (newValue === counter) return;
		setCounter(newValue);
		onChange?.({ count: newValue, product });
	};

	const reset = () => {
		const newValue = clamp(initialValues?.count ?? 0);
		setCounter(newValue);
		onChange?.({ count: newValue, product });
	};

	useEffect(() => {
		if (!isMounted.current) return;
		if (value === undefined) return;
		const upper = maxCount != null ? Math.min(value, maxCount) : value;
		setCounter(Math.max(upper, 0));
	}, [value, maxCount]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		maxCount,
		isMaxReached: maxCount != null && counter >= maxCount,
		isMin: counter <= 0,
		reset,
		increaseBy,
	};
};
