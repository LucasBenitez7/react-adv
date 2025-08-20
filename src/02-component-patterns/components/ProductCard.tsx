import { createContext, ReactNode, useContext } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface Product {
	id: string;
	title: string;
	img?: string;
}

interface Props {
	product: Product;
	children?: ReactNode;
}

interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
	const { product } = useContext(ProductContext);
	let imgToShow: string;

	if (img) {
		imgToShow = img;
	} else if (product.img) {
		imgToShow = product.img;
	} else {
		imgToShow = noImage;
	}

	return (
		<img className={styles.productImg} src={imgToShow} alt="Product-Image" />
	);
};

export const ProductTitle = ({ title }: { title?: string }) => {
	const { product } = useContext(ProductContext);

	return (
		<span className={styles.productDescription}>
			{title ? title : product.title}
		</span>
	);
};

export const ProductButtons = () => {
	const { counter, increaseBy } = useContext(ProductContext);
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

export const ProductCard = ({ children, product }: Props) => {
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
