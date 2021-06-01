import React, { useState, useCallback, memo } from "react";
import { useSelector } from "react-redux";
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
	const { cartItemsCount } = useSelector((state) => state.cart);

	const [links, setLinks] = useState([
		{
			key: nanoid(),
			children: "Home",
			to: "/",
		},
		{
			key: nanoid(),
			children: "Vegetable",
			to: "/0",
		},
		{
			key: nanoid(),
			children: "Dried Fruits",
			to: "/0",
		},
		{
			key: nanoid(),
			children: "Sale",
			to: "/0",
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

	const googleLogin = () => {
		window.location.href = "http://localhost:3001/api/user/facebook-login";
	};

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
						iconClass={classes.header__icon}
						onClick={() => openAuthModalHandler("signUp")}
					/>
					<Icon
						iconName="heart"
						iconClass={classes.header__icon}
						onClick={() => openAuthModalHandler("signIn")}
					/>
					<Icon
						iconName="bag"
						iconClass={classes.header__icon}
						onClick={openSidebarHandler}
					/>
				</div>
			</Row>
			<SearchBar />
		</header>
	);
};

export default memo(Header);
