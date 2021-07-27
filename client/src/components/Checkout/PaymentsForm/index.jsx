import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";
import { Button, RadioButton } from "../../UI";

const PaymentsForm = ({ initiatePayment }) => {
	const [radioButtons, setRadioButtons] = useState([
		{
			key: nanoid(),
			name: "payment-method",
			label: "Cash on delivery",
			checked: false,
		},
		{
			key: nanoid(),
			name: "payment-method",
			label: "Bank Transfer Payment",
			checked: false,
		},
	]);

	const [isProceedButtonVisible, setIsProceedButtonVisible] = useState(false);

	const onSelectHandler = (index) => {
		setRadioButtons((buttons) => {
			const newButtons = [...buttons];
			buttons.forEach((button, i) => {
				if (index === i) {
					button.checked = true;
				} else {
					button.checked = false;
				}
			});

			return newButtons;
		});
	};

	const checkValidationHandler = () => {
		return radioButtons.some((button) => button.checked === true);
	};

	useEffect(() => {
		const canProceed = checkValidationHandler();
		if (canProceed) {
			setIsProceedButtonVisible(true);
		} else {
			setIsProceedButtonVisible(false);
		}
	}, [radioButtons]);

	const placeOrderHandler = (e) => {
		e.preventDefault();
		initiatePayment();
	};

	return (
		<form className={classes.payments__form} onSubmit={placeOrderHandler}>
			<p className={classes.payments__title}>Payment Method:</p>
			{radioButtons.map((button, index) => (
				<RadioButton {...button} onChange={() => onSelectHandler(index)} />
			))}
			{isProceedButtonVisible && <Button>Place Order</Button>}
		</form>
	);
};

export default PaymentsForm;
