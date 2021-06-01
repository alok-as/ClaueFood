import React, { useState } from "react";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";
import { FooterList } from "../../../UI";

const FooterLists = () => {
	const [categoriesList, setCategoriesList] = useState([
		{ key: nanoid(), children: "Men" },
		{ key: nanoid(), children: "Women" },
		{ key: nanoid(), children: "Accessories" },
		{ key: nanoid(), children: "Shoes" },
		{ key: nanoid(), children: "Denim" },
		{ key: nanoid(), children: "Dress" },
	]);

	const [informationList, setInformationList] = useState([
		{ key: nanoid(), children: "About Us" },
		{ key: nanoid(), children: "Contact Us" },
		{ key: nanoid(), children: "Terms & Conditions" },
		{ key: nanoid(), children: "Returns and Exchanges" },
		{ key: nanoid(), children: "Shipping & Delicery" },
		{ key: nanoid(), children: "Privacy Policy" },
	]);

	const [quickLinksList, setQuickLinksList] = useState([
		{ key: nanoid(), children: "Store Location" },
		{ key: nanoid(), children: "My Account" },
		{ key: nanoid(), children: "Accessories" },
		{ key: nanoid(), children: "Order Tracking" },
		{ key: nanoid(), children: "Size Guide" },
		{ key: nanoid(), children: "FAQs" },
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
