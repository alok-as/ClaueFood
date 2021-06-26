import React, { lazy, Suspense, useEffect, useState, useCallback } from "react";
import { Switch, Route } from "react-router-dom";

import { ScrollToTop } from "../../components/UI";
import { Header, Footer, NewsletterModal } from "../../containers/Layout";
import { Portal } from "../index";

import { ProtectedRoute } from "../index";
import {
	extractValueFromSessionStorage,
	setValueInSessionStorage,
} from "../../utils";

import HomePage from "../../pages/HomePage";
const ProductPage = lazy(() => import("../../pages/ProductPage"));
const CheckoutPage = lazy(() => import("../../pages/CheckoutPage"));
const CartPage = lazy(() => import("../../pages/CartPage"));
const CustomerLoginPage = lazy(() => import("../../pages/CustomerLoginPage"));
const TestingPage = lazy(() => import("../../pages/TestingPage"));

const Layout = () => {
	const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

	const [isNewsletterModalVisible, setIsNewsletterModalVisible] =
		useState(false);

	const checkForScrollPositionHandler = () => {
		if (window.scrollY > 10) {
			setIsScrollToTopVisible(true);
		} else {
			setIsScrollToTopVisible(false);
		}
	};

	const openNewsletterModalHandler = () => {
		setIsNewsletterModalVisible(true);
	};

	const closeNewsletterModalHandler = useCallback(() => {
		setIsNewsletterModalVisible(false);
		setValueInSessionStorage("shouldOpenNewsletter", false);
	}, []);

	useEffect(() => {
		const shouldOpenNewsletterCache = extractValueFromSessionStorage(
			"shouldOpenNewsletter"
		);

		if (shouldOpenNewsletterCache !== false) {
			setTimeout(() => {
				openNewsletterModalHandler();
			}, 1000);
		}
	}, []);

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
			<Portal>
				<NewsletterModal
					isVisible={isNewsletterModalVisible}
					onClose={closeNewsletterModalHandler}
				/>
			</Portal>
			<main>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/product/:slug" component={ProductPage} />
					<Route path="/shopping-cart" component={CartPage} />
					{/* <ProtectedRoute
						path="/checkout"
						component={CheckoutPage}
						redirect="/testing"
					/> */}
					<Route path="/checkout" component={CheckoutPage} />
					<Route path="/customer-login" component={CustomerLoginPage} />
					<Route path="/testing" component={TestingPage} />
				</Switch>
			</main>
			<Footer />
		</Suspense>
	);
};

export default Layout;
