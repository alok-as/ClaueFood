import React, { Fragment } from "react";

import classes from "./index.module.scss";
import { Backdrop } from "../index";

const Select = ({ options, value, onSelect, isOpen, onToggle, onClose }) => {
	return (
		<Fragment>
			<Backdrop
				isVisible={isOpen}
				className={classes.select__backdrop}
				onClose={onClose}
				removeScrollbar={false}
			/>
			<div className={classes.select}>
				<div className={classes.select__field} onClick={onToggle}>
					<span className={classes.select__value}>{value}</span>
					<span className={classes.select__arrow}>&gt;</span>
				</div>
				{isOpen && (
					<div className={classes.select__options}>
						<ul className={classes.select__list}>
							{options.map((option) => (
								<li
									key={option.key}
									className={classes.select__option}
									onClick={() => onSelect(option.value)}
								>
									{option.value}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default Select;
