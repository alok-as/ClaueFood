import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Animate, Backdrop, Button } from "../../components/UI";
import classes from "./index.module.scss";
import { closeCheckoutModal } from "../../redux/Cart/actions";

const ProceedModal = ({ title, imageSrc, price, onClose }) => {
	const { showCheckoutModal } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const animationConfig = {
		isVisible: showCheckoutModal,
		mountOnEnter: true,
		unmountOnExit: true,
		enter: classes.proceed__enter,
		enterActive: classes.proceed__enterActive,
		exit: classes.proceed__exit,
		exitActive: classes.proceed__exitActive,
		timeout: 300,
	};

	const closeCheckoutModalHandler = () => {
		dispatch(closeCheckoutModal());
	};

	return (
		<Fragment>
			<Backdrop
				isVisible={showCheckoutModal}
				onClose={closeCheckoutModalHandler}
			/>
			<Animate {...animationConfig}>
				<div className={classes.proceed}>
					<button
						className={classes.proceed__close}
						onClick={closeCheckoutModalHandler}
					>
						close
					</button>
					<div className={classes.proceed__header}>
						{`You have added ${title} to your shopping cart`}
					</div>
					<div className={classes.proceed__content}>
						<div className={classes.proceed__wrapper}>
							<div className={classes.proceed__image}>
								<img src={imageSrc} alt={title} />
							</div>
							<div className={classes.proceed__info}>
								<p className={classes.proceed__text}>Cart subtotal</p>
								<p className={classes.proceed__text}>${price.toFixed(2)}</p>
								<Button className={classes.proceed__cart}>View Cart</Button>
							</div>
						</div>
						<Button className={classes.proceed__checkout}>
							Proceed to Checkout
						</Button>
					</div>
				</div>
			</Animate>
		</Fragment>
	);
};

export default ProceedModal;
