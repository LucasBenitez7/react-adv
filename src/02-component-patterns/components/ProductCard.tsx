import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, ProductCardProps } from "../interfaces/interfaces";
import { ProductImage, ProductTitle, ProductButtons } from "./index";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
	const { increaseBy, counter } = useProduct();
	return (
		<Provider value={{ increaseBy, counter, product }}>
			<div className={styles.productCard}>{children}</div>
		</Provider>
	);
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
