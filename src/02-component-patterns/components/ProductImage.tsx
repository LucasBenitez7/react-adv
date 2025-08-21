import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface ProductImageProps {
	img?: string;
	className?: string;
	style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
	const { product } = useContext(ProductContext);

	const imgToShow = img || product.img || noImage;

	return (
		<img
			className={`${styles.productImg} ${className}`}
			src={imgToShow}
			alt="Product-Image"
			style={style}
		/>
	);
};
