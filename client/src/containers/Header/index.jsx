import React, { useState } from "react";
import classes from "./index.module.scss";
import Row from "../../hoc/Row";
import { Logo, NavigationItem } from "../../components/UI";
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

	return (
		<header className={classes.header}>
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
					<span>Profile</span>
					<span>Wishlist</span>
					<span>Cart</span>
				</div>
			</Row>
		</header>
	);
};

export default Header;
