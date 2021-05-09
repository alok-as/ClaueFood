import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import { Row, Portal } from "../../hoc";
import {
	ContactBar,
	Logo,
	NavigationItem,
	SearchBar,
} from "../../components/UI";
import { AuthModal, Sidebar } from "../index";
import { nanoid } from "nanoid";

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

	const openModalHandler = (type) => {
		switch (type) {
			case "signUp":
				setIsAuthModalOpen(true);
				setModalType(type);
				break;
			case "signIn":
				setIsAuthModalOpen(true);
				setModalType(type);
				break;
			case "sidebar":
				setIsSidebarVisible(true);
				break;
			default:
				break;
		}
	};

	const closeModalHandler = (type) => {
		switch (type) {
			case "signUp":
				setIsAuthModalOpen(false);
				break;
			case "sidebar":
				setIsSidebarVisible(false);
				break;
			default:
				break;
		}
	};

	const googleLogin = async () => {
		const response = await axios.get(
			"http://localhost:3001/api/user/google-login",
			{
				withCredentials: true,
			}
		);
		console.log("Checking Response", response);
	};

	return (
		<header className={classes.header}>
			<ContactBar />
			<Portal>
				<AuthModal
					isOpen={isAuthModalOpen}
					type={modalType}
					onClose={() => closeModalHandler("signUp")}
				/>
			</Portal>
			<Portal>
				<Sidebar
					isVisible={isSidebarVisible}
					onClose={() => closeModalHandler("sidebar")}
				/>
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
					<span onClick={() => openModalHandler("sidebar")}>Profile</span>
					<span onClick={() => openModalHandler("signUp")}>Wishlist</span>
					<span onClick={() => openModalHandler("signIn")}>Cart</span>
					{cartItemsCount !== 0 && <span>{cartItemsCount}</span>}
				</div>
			</Row>
			<SearchBar />
		</header>
	);
};

export default Header;
