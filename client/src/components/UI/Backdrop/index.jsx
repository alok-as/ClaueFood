import React, { useEffect } from "react";
import { Animate } from "../index";
import classes from "./index.module.scss";
import PropTypes from "prop-types";
import { combineClasses } from "../../../utils";

const Backdrop = ({ isVisible, removeScrollbar, className, onClose }) => {
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
		if (removeScrollbar) {
			if (isVisible) {
				document.body.style.overflow = "hidden";
			}
			return () => {
				document.body.style.overflow = "visible";
			};
		}
	}, [removeScrollbar, isVisible]);

	const finalBackdropClasses = [classes.backdrop];

	if (className) {
		finalBackdropClasses.push(className);
	}

	return (
		<Animate {...modalAnimationConfig}>
			<div
				className={combineClasses(finalBackdropClasses)}
				onClick={onClose}
			></div>
		</Animate>
	);
};

Backdrop.defaultProps = {
	onClose: () => console.log("onClose handler not provided for Backdrop"),
	removeScrollbar: true,
};

Backdrop.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	removeScrollbar: PropTypes.bool,
	onClose: PropTypes.func,
};

export default Backdrop;
