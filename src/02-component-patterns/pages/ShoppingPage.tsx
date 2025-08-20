import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from "../components";

const product = {
	id: "1",
	title: "Coffe Mug",
	img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title={"Hello"} />
					<ProductCard.Buttons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};
