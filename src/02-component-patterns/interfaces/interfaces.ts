import { ReactNode } from "react";

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductCardProps {
	product: Product;
	children?: ReactNode;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}
