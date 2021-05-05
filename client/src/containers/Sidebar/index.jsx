import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { Animate, Backdrop } from "../../components/UI";

const Sidebar = ({ isVisible, onClose }) => {
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
						<h2>Sidebar</h2>
					</div>
				</aside>
			</Animate>
		</Fragment>
	);
};

export default Sidebar;
