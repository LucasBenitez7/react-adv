import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
	const { onProductCountChange, shoppingCart, cartItems, hasItems } =
		useShoppingCart();

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

			<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						className="bg-dark"
						product={product}
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count ?? 0}
					>
						<ProductImage className="custom-image" />
						<ProductTitle className="text-white" />
						<ProductButtons className="custom-button" />
					</ProductCard>
				))}
			</div>

			{hasItems && (
				<div className="shopping-cart">
					{cartItems.map((item) => (
						<ProductCard
							key={item.id}
							style={{ width: "100px", margin: "10px 10px" }}
							className="bg-dark"
							product={item}
							onChange={onProductCountChange}
							value={item.count}
						>
							<ProductImage className="custom-image" />
							<ProductButtons className="custom-button" />
						</ProductCard>
					))}
				</div>
			)}
		</div>
	);
};
