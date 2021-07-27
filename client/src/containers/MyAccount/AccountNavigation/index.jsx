import React, { useState } from "react";
import { nanoid } from "nanoid";
import { AccountTitle, AccountLink } from "../../../components/MyAccount";
import classes from "./index.module.scss";

const AccountNavigation = ({ url }) => {
	const [links, setLinks] = useState([
		{
			key: nanoid(),
			children: "My Account",
			to: `${url}/profile`,
		},
		{
			key: nanoid(),
			children: "My Orders",
			to: `${url}/my-orders`,
		},
		{
			key: nanoid(),
			children: "My Wishlist",
			to: `${url}/my-wishlist`,
		},
		{
			key: nanoid(),
			children: "Account information",
			to: `${url}/account-information`,
		},
		{
			key: nanoid(),
			children: "My Product Reviews",
			to: `${url}/my-product-reviews`,
		},
		{
			key: nanoid(),
			children: "Newsletter Subscriptions",
			to: `${url}/newsletter-subscription`,
		},
	]);

	return (
		<aside className={classes.account__navigation}>
			<AccountTitle>Account Navigation</AccountTitle>
			<ul className={classes.account__list}>
				{links.map((link) => (
					<AccountLink {...link} />
				))}
			</ul>
		</aside>
	);
};

export default AccountNavigation;
