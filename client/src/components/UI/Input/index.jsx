import React from "react";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";
import { Fragment } from "react";
import { combineClasses } from "../../../utils";

const Input = ({
	type,
	name,
	label,
	placeholder,
	value,
	required,
	dropdownList,
	disabled,
	onChange,
	className,
	error,
}) => {
	const finalClasses = [classes.input];
	const finalLabelClasses = [classes.input__label];

	if (className) {
		finalClasses.push(className);
	}

	if (required) {
		finalLabelClasses.push(classes.input__required);
	}

	let element;

	console.log("Checking dropdownList", dropdownList);

	if (type.includes("dropdown")) {
		element = (
			<Fragment>
				<input
					id={label}
					name={name}
					type={type}
					placeholder={"Please input your city / area"}
					value={value}
					className={classes.input__field}
					required={required}
					readOnly={true}
					data-type="dropdown"
				/>
				<ul className={classes.input__list}>
					{dropdownList.map((item) => (
						<li
							key={nanoid()}
							className={classes.input__item}
							onClick={() => onChange(item)}
						>
							{item}
						</li>
					))}
				</ul>
			</Fragment>
		);
	} else {
		element = (
			<Fragment>
				<input
					id={label}
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					className={classes.input__field}
					disabled={disabled}
					required={required}
					onChange={onChange}
				/>
				<p className={classes.input__error}>{error && error}</p>
			</Fragment>
		);
	}

	return (
		<div className={combineClasses(finalClasses)}>
			{label && (
				<label className={combineClasses(finalLabelClasses)} htmlFor={label}>
					{label}
				</label>
			)}
			{element}
		</div>
	);
};

export default Input;
