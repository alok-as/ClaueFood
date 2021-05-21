import React, { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ScrollToTop } from "../../components/UI";
import { Header } from "../../containers/Layout";

import HomePage from "../../pages/HomePage";
const ProductPage = lazy(() => import("../../pages/ProductPage"));
const CheckoutPage = lazy(() => import("../../pages/CheckoutPage"));
const TestingPage = lazy(() => import("../../pages/TestingPage"));

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
			<main>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/product/:slug" component={ProductPage} />
					<Route path="/checkout" component={CheckoutPage} />
					<Route path="/testing" component={TestingPage} />
				</Switch>
			</main>
		</Suspense>
	);
};

export default Layout;
