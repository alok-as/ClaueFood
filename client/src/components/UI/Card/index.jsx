import React from "react";
import classes from "./index.module.scss";

const Card = ({ imageURL, title, discount }) => {
	return (
		<figure className={classes.card}>
			<img className={classes.card__image} src={imageURL} alt={title} />
			<figcaption className={classes.card__content}>
				<span className={classes.card__title}>{title}</span>
				<span className={classes.card__discount}>{`${discount}% flat`}</span>
			</figcaption>
			<button className={classes.card__button}>Shop Now</button>
		</figure>
	);
};

export default Card;
