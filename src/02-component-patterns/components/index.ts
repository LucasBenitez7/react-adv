import type { FC } from "react";
import {
	ProductCard as ProductCardHOC,
	Props as ProductCardProps,
} from "./ProductCard";
import { ProductImage, ProductImageProps } from "./ProductImage";
import { ProductTitle, ProductTitleProps } from "./ProductTitle";
import { ProductButtons, ProductButtonsProps } from "./ProductButtons";

type ProductCardComponent = FC<ProductCardProps> & {
	Image: FC<ProductImageProps>;
	Title: FC<ProductTitleProps>;
	Buttons: FC<ProductButtonsProps>;
};

export const ProductCard = Object.assign(ProductCardHOC, {
	Image: ProductImage,
	Title: ProductTitle,
	Buttons: ProductButtons,
}) as ProductCardComponent;

export { ProductImage, ProductTitle, ProductButtons };
export default ProductCard;
