import { useState } from "react";
import styles from "../styles/styles.module.css";
// import noImage from "../assets/no-image.jpg";

export const ProductCard = () => {
	const [counter, setcounter] = useState(0);

	const increaseBy = (value: number) => {
		setcounter((prev) => Math.max(prev + value, 0));
	};

	return (
		<div className={styles.productCard}>
			<img
				className={styles.productImg}
				src="./coffee-mug.png"
				alt="Coffee Mug"
			/>
			<span className={styles.productDescription}>Coffe Mug</span>

			{/* <img className={styles.productImg} src={noImage} alt="no img" /> */}

			<div className={styles.buttonsContainer}>
				<button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
					-
				</button>
				<span className={styles.countLabel}>{counter}</span>
				<button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
					+
				</button>
			</div>
		</div>
	);
};
