import { ReactElement } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
}

interface Product {
	id: string;
	title: string;
	img?: string;
}

interface ProductButtonsProps {
	counter: number;
	increaseBy: (value: number) => void;
}

export const ProductImage = ({ img = "" }) => {
	return (
		<img
			className={styles.productImg}
			src={img ? img : noImage}
			alt="Product-Image"
		/>
	);
};

export const ProductTitle = ({ title }: { title: string }) => {
	return <span className={styles.productDescription}>{title}</span>;
};

export const ProductButtons = ({
	counter,
	increaseBy,
}: ProductButtonsProps) => {
	return (
		<div className={styles.buttonsContainer}>
			<button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
				-
			</button>
			<span className={styles.countLabel}>{counter}</span>
			<button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
				+
			</button>
		</div>
	);
};

export const ProductCard = ({ children }: Props) => {
	return (
		<div className={styles.productCard}>
			{children}
		</div>
	);
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;