import React, { useEffect } from "react";
import { Animate } from "../index";
import classes from "./index.module.scss";

const Backdrop = ({ isVisible, onClose }) => {
	const modalAnimationConfig = {
		isVisible,
		mountOnEnter: true,
		unmountOnExit: true,
		enter: classes.backdrop__enter,
		enterActive: classes.backdrop__enterActive,
		exit: classes.backdrop__exit,
		exitActive: classes.backdrop__exitActive,
		timeout: 300,
	};

	useEffect(() => {
		if (isVisible) {
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.body.style.overflow = "visible";
		};
	}, [isVisible]);

	return (
		<Animate {...modalAnimationConfig}>
			<div className={classes.backdrop} onClick={onClose}></div>
		</Animate>
	);
};

export default Backdrop;
