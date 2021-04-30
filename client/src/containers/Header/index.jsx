import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import classes from "./index.module.scss";
import Row from "../../hoc/Row";
import {
	ContactBar,
	Logo,
	NavigationItem,
	SearchBar,
} from "../../components/UI";
import AuthModal from "../AuthModal";
import { nanoid } from "nanoid";

const Header = () => {
	const [links, setLinks] = useState([
		{
			key: nanoid(),
			children: "Home",
			href: "/0",
		},
		{
			key: nanoid(),
			children: "Vegetable",
			href: "/0",
		},
		{
			key: nanoid(),
			children: "Dried Fruits",
			href: "/0",
		},
		{
			key: nanoid(),
			children: "Sale",
			href: "/0",
		},
	]);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState("signUp");

	const openModalHandler = (type) => {
		setModalType(type);
		setIsModalOpen(true);
	};

	const closeModalHandler = () => {
		setIsModalOpen(false);
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
			{ReactDOM.createPortal(
				<AuthModal
					isOpen={isModalOpen}
					type={modalType}
					onClose={closeModalHandler}
				/>,
				document.getElementById("popups")
			)}
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
					<span onClick={googleLogin}>Profile</span>
					<span onClick={() => openModalHandler("signUp")}>Wishlist</span>
					<span onClick={() => openModalHandler("signIn")}>Cart</span>
				</div>
			</Row>
			<SearchBar />
		</header>
	);
};

export default Header;
