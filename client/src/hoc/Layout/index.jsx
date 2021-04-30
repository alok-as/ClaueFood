import React, { Fragment, useEffect, useState } from "react";
import Header from "../../containers/Header";

import HomePage from "../../pages/HomePage";
import { ScrollToTop } from "../../components/UI";

const Layout = () => {
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

	return (
		<Fragment>
			<Header />
			<ScrollToTop isVisible={isScrollToTopVisible} />
			<HomePage />
		</Fragment>
	);
};

export default Layout;
