import React, { Fragment, memo } from "react";
import { Animate, Backdrop, Button, Input } from "../../../components/UI";
import classes from "./index.module.scss";

const NewsletterModal = ({ isVisible, onClose }) => {
	const modalAnimationConfig = {
		isVisible: isVisible,
		mountOnEnter: true,
		unmountOnExit: true,
		enter: classes.newsletter__enter,
		enterActive: classes.newsletter__enterActive,
		exit: classes.newsletter__exit,
		exitActive: classes.newsletter__exitActive,
		timeout: 300,
	};

	console.log("News letter is rendered");

	return (
		<Fragment>
			<Backdrop
				isVisible={isVisible}
				className={classes.newsletter__backdrop}
				onClose={onClose}
			/>
			<Animate {...modalAnimationConfig}>
				<div className={classes.newsletter}>
					<div className={classes.newsletter__cross} onClick={onClose}>
						X
					</div>
					<div className={classes.newsletter__banner}>
						<h3 className={classes.newsletter__title}>Sign Up Newsletter</h3>
					</div>
					<form className={classes.newsletter__content}>
						<h4 className={classes.newsletter__heading}>
							Sign up our newsletter and save 25% off for the next purchase!
						</h4>
						<p className={classes.newsletter__text}>
							Subscribe to our newsletters and don’t miss new arrivals, the
							latest fashion updates and our promotions.
						</p>
						<Input
							type="email"
							placeholder="Enter your email address"
							className={classes.newsletter__input}
						/>
						<Button
							className={classes.newsletter__button}
							color="green"
							rounded={false}
						>
							Subscribe
						</Button>
					</form>
					<div className={classes.newsletter__alert}>
						Your Information will never be shared with any third party.
					</div>
				</div>
			</Animate>
		</Fragment>
	);
};

export default memo(NewsletterModal);
