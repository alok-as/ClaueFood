import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { Animate, Backdrop } from "../../components/UI";
import { SignInModal, SignUpModal } from "../../components/Authentication";

const AuthModal = ({ isOpen, type, onClose }) => {
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
						<p>{type.includes("signUp") ? "Create New Account" : "Sign In"}</p>
						<p onClick={onClose}>X</p>
					</div>
					<div className={classes.modal__area}>
						{type.includes("signUp") ? <SignUpModal /> : <SignInModal />}
					</div>
				</div>
			</Animate>
		</Fragment>
	);
};

export default AuthModal;
