import React, { useState, useCallback, memo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import { Row, Portal } from "../../../hoc";
import {
	ContactBar,
	Logo,
	NavigationItem,
	SearchBar,
} from "../../../components/UI";
import { AuthModal, Sidebar } from "../index";
import { nanoid } from "nanoid";

const Header = () => {
	const { cartItemsCount } = useSelector((state) => state.cart);
	const history = useHistory();

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

	const googleLogin = async () => {
		// const response = await axios.get(
		// 	"http://localhost:3001/api/user/google-login",
		// 	{
		// 		withCredentials: true,
		// 	}
		// );
		window.location.href = "http://localhost:3001/api/user/facebook-login";
		// console.log("Checking Response", response);
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
					<span onClick={() => openAuthModalHandler("signUp")}>Profile</span>
					<span onClick={() => openAuthModalHandler("signIn")}>Wishlist</span>
					<span onClick={openSidebarHandler}>Cart</span>
					{cartItemsCount !== 0 && <span>{cartItemsCount}</span>}
					<span onClick={googleLogin}>Oauth</span>
				</div>
			</Row>
			<SearchBar />
		</header>
	);
};

export default memo(Header);
