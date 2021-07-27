import React, { useState, useCallback, memo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Row, Portal } from "../../../hoc";
import {
	ContactBar,
	NavigationItem,
	SearchBar,
} from "../../../components/Layout/Header";
import { Icon, Logo } from "../../../components/UI";
import { AuthModal, Sidebar } from "../index";

const Header = () => {
	const history = useHistory();
	const { isAuthenticated } = useSelector((state) => state.auth.authDetails);
	const { cartItemsCount } = useSelector((state) => state.cart);
	const { wishlistItemsCount } = useSelector((state) => state.wishlist);

	const [links, setLinks] = useState([
		{
			key: nanoid(),
			children: "Home",
			to: "/",
		},
		{
			key: nanoid(),
			children: "Vegetable",
			to: "/products?category=vegetables",
		},
		{
			key: nanoid(),
			children: "Dried Fruits",
			to: "/products?category=dried fruits",
		},
		{
			key: nanoid(),
			children: "Sale",
			to: "/products?category=sale",
		},
	]);

	const [authenticatedDropdownList, setAuthenticatedDropdownList] = useState([
		{
			key: nanoid(),
			title: "My account",
			onClick: () => history.push("/my-account/profile"),
		},
		{
			key: nanoid(),
			title: "My Wishlist",
			onClick: () => history.push("/my-account/my-wishlist"),
		},
		{
			key: nanoid(),
			title: "Sign out",
		},
	]);

	const [unAuthenticatedDropdownList, setUnAuthenticatedDropdownList] =
		useState([
			{
				key: nanoid(),
				title: "Create an Account",
				onClick: () => openAuthModalHandler("signUp"),
			},
			{
				key: nanoid(),
				title: "Sign in",
				onClick: () => openAuthModalHandler("signIn"),
			},
		]);

	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

	const [modalType, setModalType] = useState("signUp");

	const openAuthModalHandler = (type) => {
		setIsAuthModalOpen(true);
		setModalType(type);
	};

	const closeAuthModalHandler = useCallback(() => {
		setIsAuthModalOpen(false);
	}, []);

	const openSidebarHandler = () => {
		setIsSidebarVisible(true);
	};

	const closeSidebarHandler = useCallback(() => {
		setIsSidebarVisible(false);
	}, []);

	return (
		<header className={classes.header}>
			<ContactBar />
			<Portal>
				<AuthModal
					isOpen={isAuthModalOpen}
					type={modalType}
					onClose={closeAuthModalHandler}
				/>
			</Portal>
			<Portal>
				<Sidebar isVisible={isSidebarVisible} onClose={closeSidebarHandler} />
			</Portal>
			<Row className={classes.header__content}>
				<Logo />
				<nav className={classes.navigation}>
					<ul className={classes.navigation__list}>
						{links.map((link) => (
							<NavigationItem {...link} />
						))}
					</ul>
				</nav>
				<div className={classes.header__options}>
					<Icon
						iconName="user"
						wrapperClass={classes.header__icon}
						dropdownList={
							isAuthenticated
								? authenticatedDropdownList
								: unAuthenticatedDropdownList
						}
					/>
					<Icon iconName="heart" wrapperClass={classes.header__icon} />
					<Icon
						iconName="bag"
						wrapperClass={classes.header__icon}
						onClick={openSidebarHandler}
					/>
				</div>
			</Row>
			<SearchBar />
		</header>
	);
};

export default memo(Header);
