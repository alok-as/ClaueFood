import React, { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../containers/Header";
import { ScrollToTop } from "../../components/UI";

import HomePage from "../../pages/HomePage";
const ProductPage = lazy(() => import("../../pages/ProductPage"));

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
		<Suspense fallback={<h1>Loading...</h1>}>
			<Header />
			<ScrollToTop isVisible={isScrollToTopVisible} />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/product/:slug" component={ProductPage} />
			</Switch>
		</Suspense>
	);
};

export default Layout;
