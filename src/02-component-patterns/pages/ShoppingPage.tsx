import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";
import styles from "../styles/styles.module.css";

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1
				style={{
					margin: "20px auto",
				}}
			>
				Shopping Page
			</h1>
			<hr />

			<div>
				<ProductCard
					key={product.id}
					className="bg-dark"
					product={product}
					initialValues={{ count: 1, maxCount: 10 }}
				>
					{({ reset, count, increaseBy, isMaxReached, isMin }) => (
						<>
							<ProductImage className="custom-image" />
							<ProductTitle className="text-white" />
							<ProductButtons className="custom-button" />

							<div
								className="custom-button"
								style={{
									display: "flex",
									flexDirection: "row",
									margin: "10px",
								}}
							>
								<button
									onClick={() => increaseBy(-2)}
									className={`${styles.buttonMinus} ${
										isMin ? styles.disabled : ""
									}`}
									disabled={isMin}
								>
									-2
								</button>
								<span className={styles.countLabel}>{count}</span>
								<button
									onClick={() => increaseBy(+2)}
									className={`${styles.buttonAdd} ${
										isMaxReached ? styles.disabled : ""
									}`}
									disabled={isMaxReached}
								>
									+2
								</button>
							</div>
							
							<button onClick={reset}>Reset</button>
						</>
					)}
				</ProductCard>
			</div>
		</div>
	);
};
