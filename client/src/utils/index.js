export const calculateCartItemsCount = (items) => {
	const count = items.reduce((acc, item) => acc + item.quantity, 0);
	return count;
};

export const calculateTotalCartPrice = (items) => {
	const count = items.reduce((acc, item) => {
		console.log("Checking item", item);
		if (item.dicountedPrice) {
			return acc + item.quantity * item.dicountedPrice;
		} else {
			return acc + item.quantity * item.price;
		}
	}, 0);
	return count;
};
