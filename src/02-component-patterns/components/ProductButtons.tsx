import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ProductButtonsProps {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
	const { counter, increaseBy, maxCount } = useContext(ProductContext);

	const isMaxReached = maxCount != null && counter >= maxCount;
	const isMin = counter <= 0;

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button
				type="button"
				onClick={() => increaseBy(-1)}
				className={`${styles.buttonMinus} ${isMin ? styles.disabled : ""}`}
				disabled={isMin}
			>
				-
			</button>
			<span className={styles.countLabel}>{counter}</span>
			<button
				type="button"
				onClick={() => increaseBy(1)}
				className={`${styles.buttonAdd} ${isMaxReached ? styles.disabled : ""}`}
				disabled={isMaxReached}
			>
				+
			</button>
		</div>
	);
};
