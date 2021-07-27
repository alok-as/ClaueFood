import React, { lazy, Suspense, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { ScrollToTop } from "../../components/UI";
import {
	Header,
	Footer,
	NewsletterModal,
	ProceedModal,
} from "../../containers/Layout";
import { Portal, ProtectedRoute } from "../index";

import { fetchUserCartItems } from "../../redux/Cart/actions";
import { fetchUsersWishlist } from "../../redux/WishList/actions";

import {
	extractValueFromSessionStorage,
	setValueInSessionStorage,
} from "../../utils";

import HomePage from "../../pages/HomePage";
const CartPage = lazy(() => import("../../pages/CartPage"));
const CheckoutPage = lazy(() => import("../../pages/CheckoutPage"));
const CustomerLoginPage = lazy(() => import("../../pages/CustomerLoginPage"));
const MyAccountPage = lazy(() => import("../../pages/MyAccountPage"));
const ProductListingPage = lazy(() => import("../../pages/ProductListingPage"));
const ProductPage = lazy(() => import("../../pages/ProductPage"));
const TestingPage = lazy(() => import("../../pages/TestingPage"));

const Layout = () => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.auth.authDetails);

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

	useEffect(() => {
		if (isAuthenticated) {
			dispatch(fetchUserCartItems());
			dispatch(fetchUsersWishlist());
		}
	}, [isAuthenticated, dispatch]);

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

					<ProtectedRoute
						path="/my-account"
						component={MyAccountPage}
						redirect="/customer-login"
					/>

					<ProtectedRoute
						path="/shopping-cart"
						component={CartPage}
						redirect="/customer-login"
					/>

					<ProtectedRoute
						path="/checkout"
						component={CheckoutPage}
						redirect="/customer-login"
					/>

					<Route path="/customer-login" component={CustomerLoginPage} />
					<Route path="/testing" component={TestingPage} />
				</Switch>
			</main>
			<Footer />
		</Suspense>
	);
};

export default Layout;
