export const calculateCartItemsCount = (items) => {
	const count = items.reduce((acc, item) => acc + item.quantity, 0);
	return count;
};
