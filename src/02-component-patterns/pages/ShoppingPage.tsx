import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from "../components";
import "../styles/custom-styles.css";

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
				<ProductCard className="bg-dark" product={product}>
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title className="text-white" title={"Hello"} />
					<ProductCard.Buttons className="custom-button" />
				</ProductCard>

				<ProductCard className="bg-dark" product={product}>
					<ProductImage className="custom-image" />
					<ProductTitle className="text-white" />
					<ProductButtons className="custom-button" />
				</ProductCard>

				<ProductCard
					style={{ backgroundColor: "rgb(56, 56, 56)", color: "white" }}
					product={product}
				>
					<ProductImage
						style={{
							borderRadius: "20px",
							padding: "10px",
							width: "calc(100% - 20px)",
						}}
					/>
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};
