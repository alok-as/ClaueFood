import React from "react";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";
import { Fragment } from "react";

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
	const finalClass = [classes.input];
	const finalLabelClass = [classes.input__label];

	if (className) {
		finalClass.push(className);
	}

	if (required) {
		finalLabelClass.push(classes.input__required);
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
		<div className={finalClass.join(" ")}>
			{label && (
				<label className={finalLabelClass.join(" ")} htmlFor={label}>
					{label}
				</label>
			)}
			{element}
		</div>
	);
};

export default Input;
