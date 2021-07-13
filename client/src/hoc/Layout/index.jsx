import React, { lazy, Suspense, useEffect, useState, useCallback } from "react";
import { Switch, Route } from "react-router-dom";

import { ScrollToTop } from "../../components/UI";
import {
	Header,
	Footer,
	NewsletterModal,
	ProceedModal,
} from "../../containers/Layout";
import { Portal } from "../index";

import { ProtectedRoute } from "../index";
import {
	extractValueFromSessionStorage,
	setValueInSessionStorage,
} from "../../utils";

import HomePage from "../../pages/HomePage";
const ProductPage = lazy(() => import("../../pages/ProductPage"));
const ProductListingPage = lazy(() => import("../../pages/ProductListingPage"));
const CheckoutPage = lazy(() => import("../../pages/CheckoutPage"));
const CartPage = lazy(() => import("../../pages/CartPage"));
const CustomerLoginPage = lazy(() => import("../../pages/CustomerLoginPage"));
const TestingPage = lazy(() => import("../../pages/TestingPage"));

const Layout = () => {
	const [isNewsletterModalVisible, setIsNewsletterModalVisible] =
		useState(false);

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

	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Header />
			<ScrollToTop />
			<Portal>
				<NewsletterModal
					isVisible={isNewsletterModalVisible}
					onClose={closeNewsletterModalHandler}
				/>
			</Portal>
			<Portal>
				<ProceedModal />
			</Portal>
			<main>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/products" component={ProductListingPage} />
					<Route path="/product/:slug" component={ProductPage} />
					<Route path="/shopping-cart" component={CartPage} />
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
