import type { FC } from "react";
import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

import type {
	ProductCardProps,
	ProductImageProps,
	ProductTitleProps,
} from "../interfaces/interfaces";

type ProductCardComponent = FC<ProductCardProps> & {
	Image: FC<ProductImageProps>;
	Title: FC<ProductTitleProps>;
	Buttons: FC;
};

export const ProductCard = Object.assign(ProductCardHOC, {
	Image: ProductImage,
	Title: ProductTitle,
	Buttons: ProductButtons,
}) as ProductCardComponent;

export { ProductImage, ProductTitle, ProductButtons };
export default ProductCard;
