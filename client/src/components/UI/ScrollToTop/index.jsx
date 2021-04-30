import React from "react";
import classes from "./index.module.scss";

const ScrollToTop = ({ isVisible }) => {
	let finalClass = [classes.scroll];

	if (isVisible) {
		finalClass.push(classes.scroll__visible);
	}

	const scrollToTopHandler = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className={finalClass.join(" ")} onClick={scrollToTopHandler}></div>
	);
};

export default ScrollToTop;
