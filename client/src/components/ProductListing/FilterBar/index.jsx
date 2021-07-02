import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { Animate, Backdrop, Heading } from "../../UI";

const FilterBar = ({ isVisible, onClose }) => {
	const animationConfig = {
		isVisible,
		mountOnEnter: true,
		unmountOnExit: true,
		enter: classes.filter__enter,
		enterActive: classes.filter__enterActive,
		exit: classes.filter__exit,
		exitActive: classes.filter__exitActive,
		timeout: 300,
	};

	return (
		<Fragment>
			<Backdrop isVisible={isVisible} onClose={onClose} />
			<Animate {...animationConfig}>
				<aside className={classes.filter}>
					<div className={classes.filter__header}>
						<Heading type="quaternary" className={classes.filter__heading}>
							Filter by Price
						</Heading>
						<span className={classes.filter__close} onClick={onClose}>
							Close
						</span>
					</div>
					<div className={classes.filter__slider}></div>
				</aside>
			</Animate>
		</Fragment>
	);
};

export default FilterBar;
