import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface ProductInCart extends Product {
	count: number;
}
type Cart = Record<string, ProductInCart>;

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<Cart>({});

	const cartItems = Object.values(shoppingCart);
	const hasItems = cartItems.length > 0;

	const onProductCountChange = ({ count, product }: onChangeArgs) => {
		setShoppingCart((prev) => {
			const productInCart: ProductInCart = prev[product.id] || {
				...product,
				count: 0,
			};

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;

				return {
					...prev,
					[product.id]: productInCart,
				};
			}

			const { [product.id]: _removed, ...rest } = prev;
			return rest;
		});
	};
	return {
		shoppingCart,
		hasItems,
		cartItems,
		onProductCountChange,
	};
};
