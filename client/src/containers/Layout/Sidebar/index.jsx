import React, { Fragment, memo } from "react";
import { useSelector } from "react-redux";

import classes from "./index.module.scss";
import {
	Animate,
	Backdrop,
	Button,
	MiniCartItem,
} from "../../../components/UI";
import { calculateTotalCartPrice } from "../../../utils";

const Sidebar = ({ isVisible, onClose }) => {
	console.log("Sidebar is rendered");
	const { cartItems } = useSelector((state) => state.cart);

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
						<ul className={classes.sidebar__list}>
							{cartItems.map((item) => (
								<MiniCartItem key={item._id} {...item} />
							))}
						</ul>
						<p className={classes.sidebar__total}>
							Total: ${calculateTotalCartPrice(cartItems).toFixed(2)}
						</p>
						<Button className={classes.sidebar__cart}>Go to Cart</Button>
						<Button className={classes.sidebar__checkout}>Check out</Button>
					</div>
				</aside>
			</Animate>
		</Fragment>
	);
};

export default memo(Sidebar);
