import React from "react";
import classes from "./index.module.scss";

const EditableItem = ({ title, onClick, children }) => {
	return (
		<li className={classes.edit__item}>
			<p className={classes.edit__header}>
				<span className={classes.edit__title}>{title}:</span>
				<span className={classes.edit__icon} onClick={onClick}>
					Icon
				</span>
			</p>
			<div className={classes.edit__content}>{children}</div>
		</li>
	);
};

export default EditableItem;
