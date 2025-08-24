export interface Product {
	id: string;
	title: string;
	img?: string;
}
export interface ProductContextProps {
	counter: number;
	product: Product;
	maxCount?: number;
	increaseBy: (value: number) => void;
}

export interface onChangeArgs {
	product: Product;
	count: number;
}

export interface InitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxReached: boolean;
	maxCount?: number;
	product: Product;
	isMin: boolean;
	increaseBy: (value: number) => void;
	reset: () => void;
}
