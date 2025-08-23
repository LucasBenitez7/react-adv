import { createContext, ReactNode, useMemo } from "react";
import { useProduct } from "../hooks/useProduct";
import {
	ProductContextProps,
	Product,
	onChangeArgs,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
	product: Product;
	children?: ReactNode;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
}: Props) => {
	const { increaseBy, counter } = useProduct({ onChange, product, value });

	const valueProvider = useMemo(
		() => ({ increaseBy, counter, product, className, style, onChange, value }),
		[increaseBy, counter, product, className, style, onChange, value]
	);

	return (
		<Provider value={valueProvider}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};
