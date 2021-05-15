import React from "react";
import classes from "./index.module.scss";

const Input = ({
	type,
	name,
	label,
	placeholder,
	value,
	required,
	error,
	onChange,
	className,
}) => {
	const finalClass = [classes.input];

	if (className) {
		finalClass.push(className);
	}

	return (
		<div className={finalClass.join(" ")}>
			{label && (
				<label className={classes.input__label} htmlFor={label}>
					{label}
				</label>
			)}
			<input
				id={label}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				className={classes.input__field}
				required={required}
				onChange={onChange}
			/>
			<p className={classes.input__error}>{error && error}</p>
		</div>
	);
};

export default Input;
