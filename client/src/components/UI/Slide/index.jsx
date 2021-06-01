import React, { memo } from "react";
import classes from "./index.module.scss";
import { Button, Heading } from "../index";
import { combineClasses } from "../../../utils";

const Slide = ({ imageURL, isVisible, heading, subheading, text }) => {
	const style = {
		backgroundImage: `url(${imageURL})`,
	};

	let finalSlideClasses, finalContentClasses;

	if (isVisible) {
		finalSlideClasses = [classes.slide, classes.slide__active];
		finalContentClasses = [
			classes.slide__content,
			classes.slide__contentactive,
		];
	} else {
		finalSlideClasses = [classes.slide];
		finalContentClasses = [classes.slide__content];
	}

	return (
		<div className={combineClasses(finalSlideClasses)} style={style}>
			<div className={combineClasses(finalContentClasses)}>
				<Heading type="secondary">{subheading}</Heading>
				<Heading type="primary">{heading}</Heading>
				<Heading
					type="secondary"
					color="var(--color-grey-1)"
					className={classes.slide__text}
				>
					{text}
				</Heading>
				<Button color="green">Buy Now</Button>
			</div>
		</div>
	);
};

export default memo(Slide);
