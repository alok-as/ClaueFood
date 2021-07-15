import React, { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import classes from "./index.module.scss";
import {
	Animate,
	Backdrop,
	Button,
	MiniCartItem,
} from "../../../components/UI";
import { removeProductFromCart } from "../../../redux/Cart/actions";

const Sidebar = ({ isVisible, onClose }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);

	const removeProductFromCartHandler = (productId, price, discountedPrice) => {
		dispatch(removeProductFromCart(productId, price, discountedPrice));
	};

	const onRouteChangeHandler = (route) => {
		history.push(route);
		onClose();
	};

	const sidebarAnimationConfig = {
		isVisible: isVisible,
		mountOnEnter: true,
		unmountOnExit: true,
		enter: classes.sidebar__enter,
		enterActive: classes.sidebar__enterActive,
		exit: classes.sidebar__exit,
		exitActive: classes.sidebar__exitActive,
		timeout: 300,
	};

	return (
		<Fragment>
			<Backdrop isVisible={isVisible} onClose={onClose} />
			<Animate {...sidebarAnimationConfig}>
				<aside className={classes.sidebar}>
					<div className={classes.sidebar__header}>
						<button className={classes.sidebar__close} onClick={onClose}>
							close
						</button>
						<p className={classes.sidebar__title}>Mini Cart</p>
					</div>
					<div className={classes.sidebar__content}>
						{!cartItems.length ? (
							<p className={classes.sidebar__noitems}>
								You have no items in your shopping cart.
							</p>
						) : (
							<Fragment>
								<ul className={classes.sidebar__list}>
									{cartItems.map((item) => (
										<MiniCartItem
											key={item._id}
											quantity={item.quantity}
											{...item.product}
											removeProductFromCart={removeProductFromCartHandler}
										/>
									))}
								</ul>
								<p className={classes.sidebar__total}>
									Total: ${cartTotalPrice.toFixed(2)}
								</p>
								<Button
									className={classes.sidebar__cart}
									onClick={() => onRouteChangeHandler("/shopping-cart")}
								>
									Go to Cart
								</Button>
								<Button
									className={classes.sidebar__checkout}
									onClick={() => onRouteChangeHandler("/checkout")}
								>
									Check out
								</Button>
							</Fragment>
						)}
					</div>
				</aside>
			</Animate>
		</Fragment>
	);
};

export default memo(Sidebar);
