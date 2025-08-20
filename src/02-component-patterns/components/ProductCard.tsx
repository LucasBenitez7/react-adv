import { createContext, useMemo } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, ProductCardProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
	const { increaseBy, counter } = useProduct();

  const value = useMemo(() => ({ increaseBy, counter, product }), [increaseBy, counter, product]);
	
	return (
		<Provider value={value}>
			<div className={styles.productCard}>{children}</div>
		</Provider>
	);
};

