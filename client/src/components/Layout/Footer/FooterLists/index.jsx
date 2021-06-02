import React, { useState } from "react";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";
import { FooterList } from "../../../UI";

const FooterLists = () => {
	const [categoriesList, setCategoriesList] = useState([
		{ key: nanoid(), children: "Men", to: "/" },
		{ key: nanoid(), children: "Women", to: "/" },
		{ key: nanoid(), children: "Accessories", to: "/" },
		{ key: nanoid(), children: "Shoes", to: "/" },
		{ key: nanoid(), children: "Denim", to: "/" },
		{ key: nanoid(), children: "Dress", to: "/" },
	]);

	const [informationList, setInformationList] = useState([
		{ key: nanoid(), children: "About Us", to: "/" },
		{ key: nanoid(), children: "Contact Us", to: "/" },
		{ key: nanoid(), children: "Terms & Conditions", to: "/" },
		{ key: nanoid(), children: "Returns and Exchanges", to: "/" },
		{ key: nanoid(), children: "Shipping & Delicery", to: "/" },
		{ key: nanoid(), children: "Privacy Policy", to: "/" },
	]);

	const [quickLinksList, setQuickLinksList] = useState([
		{ key: nanoid(), children: "Store Location", to: "/" },
		{ key: nanoid(), children: "My Account", to: "/" },
		{ key: nanoid(), children: "Accessories", to: "/" },
		{ key: nanoid(), children: "Order Tracking", to: "/" },
		{ key: nanoid(), children: "Size Guide", to: "/" },
		{ key: nanoid(), children: "FAQs", to: "/" },
	]);

	return (
		<div className={classes.footer__lists}>
			<FooterList listTitle="Categories" listData={categoriesList} />
			<FooterList listTitle="Information" listData={informationList} />
			<FooterList listTitle="Quick Links" listData={quickLinksList} />
		</div>
	);
};

export default FooterLists;
