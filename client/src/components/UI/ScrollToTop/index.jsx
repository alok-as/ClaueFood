import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const ScrollToTop = () => {
	const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

	const checkForScrollPositionHandler = () => {
		if (window.scrollY > 10) {
			setIsScrollToTopVisible(true);
		} else {
			setIsScrollToTopVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkForScrollPositionHandler);
		return () => {
			window.removeEventListener("scroll", checkForScrollPositionHandler);
		};
	}, []);

	let finalClasses = [classes.scroll];

	if (isScrollToTopVisible) {
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
