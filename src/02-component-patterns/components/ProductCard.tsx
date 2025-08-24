import { createContext, useMemo } from "react";
import { useProduct } from "../hooks/useProduct";
import {
	ProductContextProps,
	Product,
	onChangeArgs,
	InitialValues,
	ProductCardHandlers,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
	product: Product;
	children: (arg: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValues,
}: Props) => {
	const { increaseBy, counter, maxCount, isMaxReached, isMin, reset} = useProduct({ onChange, product, value, initialValues });

	const valueProvider = useMemo(() => ({
			increaseBy,
			counter,
			product,
			maxCount,
			isMaxReached,
			isMin,
		}),[increaseBy, counter, product, maxCount, isMaxReached, isMin]
	);

	return (
		<Provider value={valueProvider}>
			<div className={`${styles.productCard} ${className ?? ""}`} style={style}>
				{children({
					count: counter,
					isMaxReached, 
					maxCount,
					product,
					isMin,
					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};
