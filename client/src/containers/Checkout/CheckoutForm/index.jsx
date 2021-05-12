import React, { useState, useEffect, useRef } from "react";
import { PaymentsForm, ShippingForm } from "../../../components/Checkout";

import classes from "./index.module.scss";
import {
	setValueInsessionStorage,
	extractAllValuesFromsessionStorage,
	resetAllValuesInsessionStorage,
	setupBrowserBackFunctionality,
	onBrowserBackClick,
	removeValueFromsessionStorage,
} from "../../../utils";
import { Row } from "../../../hoc";

const CheckoutForm = () => {
	const [activeStep, setActiveStep] = useState(0);

	const setInitialValuesHandler = (cache, length) => {
		if (!length) {
			return;
		}

		if (cache.hasOwnProperty("step")) {
			setActiveStep(cache.step);
		}
	};

	const switchToStepHandler = (event, step) => {
		event.preventDefault();
		setActiveStep(step);
		setValueInsessionStorage("step", step);
	};

	useEffect(() => {
		setupBrowserBackFunctionality();
		onBrowserBackClick(removeValueFromsessionStorage);
	}, []);

	useEffect(() => {
		const [cache, length] = extractAllValuesFromsessionStorage();
		setInitialValuesHandler(cache, length);

		return () => {
			resetAllValuesInsessionStorage();
		};
	}, []);

	let activeForm;
	if (activeStep === 0) {
		activeForm = (
			<ShippingForm switchToStep={(e) => switchToStepHandler(e, 1)} />
		);
	} else {
		activeForm = <PaymentsForm />;
	}

	return (
		<div className={classes.checkout}>
			<Row className={classes.checkout__content}>
				<h1>Stepper Step</h1>
				<div className={classes.checkout__wrapper}>
					<div className={classes.checkout__left}>{activeForm}</div>
					<div className={classes.checkout__right}>
						<h1>Order Summary</h1>
					</div>
				</div>
			</Row>
		</div>
	);
};

export default CheckoutForm;
