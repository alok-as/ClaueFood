import React from "react";
import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const ScrollToTop = ({ isVisible }) => {
	let finalClasses = [classes.scroll];

	if (isVisible) {
		finalClasses.push(classes.scroll__visible);
	}

	const scrollToTopHandler = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div
			className={combineClasses(finalClasses)}
			onClick={scrollToTopHandler}
		></div>
	);
};

export default ScrollToTop;
