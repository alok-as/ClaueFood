import React from "react";
import classes from "./index.module.scss";

const Subscribe = () => {
	const onSubscribeHandler = (event) => {
		event.preventDefault();
	};

	return (
		<div className={classes.subscribe}>
			<p className={classes.subscribe__text}>
				Subscribe to our newsletter and get 10% off your first purchase
			</p>
			<form className={classes.subscribe__form} onSubmit={onSubscribeHandler}>
				<input
					type="email"
					className={classes.subscribe__input}
					placeholder="Your email address"
				/>
				<button className={classes.subscribe__button}>Subscribe</button>
			</form>
		</div>
	);
};

export default Subscribe;
