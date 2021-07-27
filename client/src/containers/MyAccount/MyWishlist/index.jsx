import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Button, ProductCard } from "../../../components/UI";
import { addProductToCart } from "../../../redux/Cart/actions";

const MyWishlist = () => {
	const dispatch = useDispatch();
	const { wishlistItems } = useSelector((state) => state.wishlist);

	const addProductToCartHandler = (productId, modalData) => {
		dispatch(addProductToCart(productId, modalData));
	};

	return (
		<div className={classes.wishlist}>
			<div className={classes.wishlist__grid}>
				{wishlistItems.map((item) => (
					<ProductCard
						key={nanoid()}
						{...item}
						addProductToCart={addProductToCartHandler}
					/>
				))}
			</div>
			<div className={classes.wishlist__cta}>
				<Button className={classes.wishlist__button} rounded={false}>
					Add all to cart
				</Button>
			</div>
		</div>
	);
};

export default MyWishlist;
