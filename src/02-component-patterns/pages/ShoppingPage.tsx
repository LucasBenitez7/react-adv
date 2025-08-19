import { ProductCard } from "../components/ProductCard";
import { useProduct } from "../hooks/useProduct";

const product = {
	id: "1",
	title: "Coffe Mug",
	img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
	const { counter, increaseBy } = useProduct();

	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
				{/* <ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title= "Cafe" />
					<ProductCard.Buttons counter={counter} increaseBy={increaseBy} />
				</ProductCard> */}

				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title="Cafe" />
					<ProductCard.Buttons counter={counter} increaseBy={increaseBy} />
				</ProductCard>
			</div>
		</div>
	);
};
