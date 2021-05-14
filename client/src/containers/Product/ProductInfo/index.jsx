import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Row } from "../../../hoc";
import { Tab } from "../../../components/UI";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";

const ProdcutInfo = () => {
	const { details } = useSelector((state) => state.products.productDetails);

	// {details.title}

	console.log("Checking details", details);

	const [tabs, setTabs] = useState([
		{
			key: nanoid(),
			isActive: true,
			children: "Details",
		},
		{
			key: nanoid(),
			isActive: false,
			children: "Custom Tab",
		},
		{
			key: nanoid(),
			isActive: false,
			children: "Reviews",
		},
	]);

	const [activeTab, setActiveTab] = useState(0);

	const onSelectTabHandler = (index) => {
		const newTabs = [...tabs];
		newTabs.forEach((tab, i) => {
			if (i === index) {
				tab.isActive = true;
			} else {
				tab.isActive = false;
			}
		});

		setActiveTab(index);
		setTabs(newTabs);
	};

	let content = null;

	switch (activeTab) {
		case 0:
			content = details?.description;
			break;
		case 1:
			content = "Product Custom Tab";
			break;
		case 2:
			content = "Product Reviews";
			break;
		default:
			break;
	}

	return (
		<div className={classes.info}>
			<Row>
				<div className={classes.info__tabs}>
					{tabs.map((tab, index) => (
						<Tab {...tab} onClick={() => onSelectTabHandler(index)} />
					))}
				</div>
				<div className={classes.info__content}>{content}</div>
			</Row>
		</div>
	);
};

export default ProdcutInfo;
