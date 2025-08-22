import { useState } from "react";
import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from "../components";
import { Product, onChangeArgs } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const product1 = {
	id: "1",
	title: "Coffe Mug - Card",
	img: "./coffee-mug.png",
};

const product2 = {
	id: "2",
	title: "Coffe Mug - Meme",
	img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
	count: number;
}
type Cart = Record<string, ProductInCart>;

export const ShoppingPage = () => {
	const [shoppingCart, setShoppingCart] = useState<Cart>({});

	const onProductCountChange = ({ count, product }: onChangeArgs) => {
		setShoppingCart((prev) => {
			if (count === 0) {
				const { [product.id]: _removed, ...rest } = prev;
				console.log(_removed);
				return rest;
			}
			const prevItem = prev[product.id];

			return {
				...prev,
				[product.id]: {
					...(prevItem ?? product),
					count,
				},
			};
		});
	};

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
					>
						<ProductImage className="custom-image" />
						<ProductTitle className="text-white" />
						<ProductButtons className="custom-button" />
					</ProductCard>
				))}
			</div>

			<div className="shopping-cart">
				<ProductCard
					style={{ width: "100px", margin: "10px 10px" }}
					className="bg-dark"
					product={product1}
				>
					<ProductImage className="custom-image" />
					<ProductButtons className="custom-button" />
				</ProductCard>

				<ProductCard
					style={{ width: "100px", margin: "10px 10px" }}
					className="bg-dark"
					product={product2}
				>
					<ProductImage className="custom-image" />
					<ProductButtons className="custom-button" />
				</ProductCard>
			</div>

			<div>
				<code>{JSON.stringify(shoppingCart, null, 5)}</code>
			</div>
		</div>
	);
};
