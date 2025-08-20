import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import type { ProductTitleProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: ProductTitleProps) => {
	const { product } = useContext(ProductContext);

	return (
		<span className={styles.productDescription}>
			{title ? title : product.title}
		</span>
	);
};
