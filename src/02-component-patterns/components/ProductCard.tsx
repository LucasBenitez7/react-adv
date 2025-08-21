import { createContext, ReactNode, useMemo } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
	product: Product;
	children?: ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
	const { increaseBy, counter } = useProduct();

	const value = useMemo(
		() => ({ increaseBy, counter, product, className, style }),
		[increaseBy, counter, product, className, style]
	);

	return (
		<Provider value={value}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};
