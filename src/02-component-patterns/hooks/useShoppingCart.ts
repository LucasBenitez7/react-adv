import { useCallback, useMemo, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface ProductInCart extends Product {
	count: number;
}
type Cart = Record<string, ProductInCart>;

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<Cart>({});

	const onProductCountChange = useCallback(
		({ count, product }: onChangeArgs) => {
			setShoppingCart((prev) => {
				if (count === 0) {
					const { [product.id]: _removed, ...rest } = prev;
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
		},
		[]
	);

	const cartItems = useMemo(() => Object.values(shoppingCart), [shoppingCart]);
	const hasItems = cartItems.length > 0;

	return {
		shoppingCart,
		hasItems,
		cartItems,
		onProductCountChange,
	};
};
