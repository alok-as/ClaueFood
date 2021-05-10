import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./index.module.scss";
import { Animate, Backdrop } from "../../../components/UI";
import { SignInModal, SignUpModal } from "../../../components/Authentication";
import {
	registerUser,
	loginUser,
	clearRegisterMetaData,
} from "../../../redux/Auth/actions";

const AuthModal = ({ isOpen, type, onClose }) => {
	const dispatch = useDispatch();
	const { registerDetails, loginDetails } = useSelector((state) => state.auth);

	const registerUserHandler = (userData) => {
		dispatch(registerUser(userData));
	};

	const loginUserHandler = (userData) => {
		dispatch(loginUser(userData));
	};

	const clearRegisterMetaDataHandler = () => {
		dispatch(clearRegisterMetaData());
	};

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
						<p className={classes.modal__heading}>
							{type.includes("signUp") ? "Create New Account" : "Sign In"}
						</p>
						<p onClick={onClose}>X</p>
					</div>
					<div className={classes.modal__area}>
						{type.includes("signUp") ? (
							<SignUpModal
								registerDetails={registerDetails}
								registerUser={registerUserHandler}
								clearRegisterMetaData={clearRegisterMetaDataHandler}
								closeModal={onClose}
							/>
						) : (
							<SignInModal
								loginDetails={loginDetails}
								loginUser={loginUserHandler}
								closeModal={onClose}
							/>
						)}
					</div>
				</div>
			</Animate>
		</Fragment>
	);
};

export default AuthModal;
