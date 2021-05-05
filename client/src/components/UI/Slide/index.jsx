import React from "react";
import classes from "./index.module.scss";
import { Button, Heading } from "../index";

const Slide = ({ imageURL, isVisible, heading, subheading, text }) => {
	const style = {
		backgroundImage: `url(${imageURL})`,
	};

	let finalSlideClass, finalContentClass;

	if (isVisible) {
		finalSlideClass = [classes.slide, classes.slide__active];
		finalContentClass = [classes.slide__content, classes.slide__contentactive];
	} else {
		finalSlideClass = [classes.slide];
		finalContentClass = [classes.slide__content];
	}

	return (
		<div className={finalSlideClass.join(" ")} style={style}>
			<div className={finalContentClass.join(" ")}>
				<Heading type="secondary">{subheading}</Heading>
				<Heading type="primary">{heading}</Heading>
				<Heading type="secondary" className={classes.slide__subheading}>
					{text}
				</Heading>
				<Button>Buy Now</Button>
			</div>
		</div>
	);
};

export default Slide;
