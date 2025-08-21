import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ProductButtonsProps {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
	const { counter, increaseBy } = useContext(ProductContext);
	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button
				onClick={() => increaseBy(-1)}
				className={`${styles.buttonMinus}`}
			>
				-
			</button>
			<span className={styles.countLabel}>{counter}</span>
			<button onClick={() => increaseBy(1)} className={`${styles.buttonAdd}`}>
				+
			</button>
		</div>
	);
};
