import React from "react";
import classes from "./index.module.scss";

const RadioButton = ({ name, label, checked, onChange }) => {
	return (
		<div className={classes.radio}>
			<input
				className={classes.radio__input}
				id={label}
				type="radio"
				name={name}
				checked={checked}
				onChange={onChange}
			/>
			<label className={classes.radio__label} htmlFor={label}>
				{label}
			</label>
		</div>
	);
};

export default RadioButton;
