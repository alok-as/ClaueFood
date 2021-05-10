import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import classes from "./index.module.scss";
import { Animate, Backdrop, MiniCartItem } from "../../../components/UI";
import { calculateTotalCartPrice } from "../../../utils";

const Sidebar = ({ isVisible, onClose }) => {
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
						<p>{calculateTotalCartPrice(cartItems)}</p>
					</div>
				</aside>
			</Animate>
		</Fragment>
	);
};

export default Sidebar;
