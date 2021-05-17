import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";
import { Button, Input } from "../../UI";
import { resetAllValuesInsessionStorage } from "../../../utils";

const ShippingForm = ({ switchToPayment, fetchZipCodeDetails }) => {
	const { cities, selectedState } = useSelector(
		(state) => state.checkout.shippingDetails
	);

	const onInputChangeHandler = (e) => {
		setFields((fields) => {
			const newFields = { ...fields };
			newFields[e.target.name].value = e.target.value;
			return newFields;
		});
	};

	const onDropdownInputChangeHandler = (value) => {
		setFields((fields) => {
			const newFields = { ...fields };
			newFields["city"].value = value;
			return newFields;
		});
	};

	const [fields, setFields] = useState({
		phoneNumber: {
			key: nanoid(),
			name: "phoneNumber",
			type: "number",
			label: "Phone Number",
			required: true,
			validate: "phoneNumber",
			placeholder: "",
			value: "",
			error: "",
			onChange: onInputChangeHandler,
		},
		zipCode: {
			key: nanoid(),
			name: "zipCode",
			type: "tel",
			label: "Zip / Postal Code",
			required: true,
			validate: "zipCode",
			placeholder: "",
			value: "",
			error: "",
			onChange: onInputChangeHandler,
		},
		country: {
			key: nanoid(),
			name: "country",
			type: "text",
			label: "Country",
			required: true,
			disabled: true,
			placeholder: "",
			value: "India",
			error: "",
		},
	});

	useEffect(() => {
		if (cities.length) {
			const newFields = {
				...fields,
				address: {
					key: nanoid(),
					name: "address",
					type: "text",
					label: "Street address",
					required: true,
					validate: "address",
					value: "",
					error: "",
					onChange: onInputChangeHandler,
				},
				city: {
					key: nanoid(),
					name: "city",
					type: "dropdown",
					label: "City",
					required: true,
					value: "",
					dropdownList: cities,
					validate: "city",
					error: "",
					onChange: onDropdownInputChangeHandler,
				},
				state: {
					key: nanoid(),
					name: "state",
					type: "text",
					label: "State / Province",
					required: true,
					disabled: true,
					validate: "state",
					value: selectedState,
					error: "",
					onChange: onInputChangeHandler,
				},
			};
			newFields.zipCode.disabled = true;
			setFields(newFields);
		}
	}, [cities]);

	const fetchZipCodeDetailsHandler = (e) => {
		e.preventDefault();
		const zipCode = fields.zipCode.value;
		if (zipCode) {
			fetchZipCodeDetails(zipCode);
		}
	};

	const switchToPaymentHandler = () => {
		const data = {
			phoneNumber: fields.phoneNumber.value,
			address: {
				street: fields.address.value,
				zipCode: fields.zipCode.value,
				city: fields.city.value,
				state: fields.state.value,
			},
			cities,
			selectedState,
		};

		switchToPayment(data);
	};

	useEffect(() => {
		window.addEventListener("beforeunload", resetAllValuesInsessionStorage);
		return () => {
			window.removeEventListener(
				"beforeunload",
				resetAllValuesInsessionStorage
			);
		};
	}, []);

	const fieldsArr = Object.values(fields);

	return (
		<form className={classes.shipping__form}>
			<p className={classes.shipping__title}>Shipping Address</p>
			<div className={classes.shipping__primaryFields}>
				{fieldsArr.map((field) => (
					<Input {...field} className={classes.shipping__field} />
				))}
				<div className={classes.shipping__cta}>
					<Button
						onClick={
							cities.length
								? switchToPaymentHandler
								: fetchZipCodeDetailsHandler
						}
						className={classes.shipping__button}
					>
						{cities.length ? "Next" : "Continue"}
					</Button>
				</div>
			</div>
		</form>
	);
};

export default ShippingForm;
