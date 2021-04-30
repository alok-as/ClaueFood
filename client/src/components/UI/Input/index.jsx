import React from "react";
import classes from "./index.module.scss";

const Input = ({ type, label, placeholder, value, onChange, className }) => {
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
				type={type}
				placeholder={placeholder}
				value={value}
				className={classes.input__field}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
