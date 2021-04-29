import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { Animate, Backdrop } from "../../components/UI";

const SignUpModal = ({ isOpen, onClose }) => {
	const modalAnimationConfig = {
		isVisible: isOpen,
		mountOnEnter: true,
		unmountOnExit: true,
		enter: classes.modal__enter,
		enterActive: classes.modal__enterActive,
		exit: classes.modal__exit,
		exitActive: classes.modal__exitActive,
		timeout: 300,
	};

	return (
		<Fragment>
			<Backdrop isVisible={isOpen} onClose={onClose} />
			<Animate {...modalAnimationConfig}>
				<div className={classes.modal}>
					<div className={classes.modal__header}>
						<p>Sign In</p>
						<p onClick={onClose}>X</p>
					</div>
				</div>
			</Animate>
		</Fragment>
	);
};

export default SignUpModal;
