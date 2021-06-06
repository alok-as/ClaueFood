import React, { useState } from "react";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";
import { Heading, SectionTitle } from "../index";
import { Row } from "../../../hoc";
import { combineClasses } from "../../../utils";

const Offerings = ({ version }) => {
	const [items, setItems] = useState([
		{
			key: nanoid(),
			title: "Free shipping",
			text: "Free shipping on all US order or order above $200",
		},
		{
			key: nanoid(),
			title: "Support 24/7",
			text: "Contact us 24 hours a day, 7 days a week",
		},
		{
			key: nanoid(),
			title: "30 Days return",
			text: "Simply return it within 30 days for an exchange.",
		},
		{
			key: nanoid(),
			title: "100% Payment Secure",
			text: "We ensure secure payment with PEV",
		},
	]);

	let finalClass;

	if (version === 1) {
		finalClass = [classes.offerings__version1];
	} else {
		finalClass = [classes.offerings__version2];
	}

	return (
		<div className={combineClasses(finalClass)}>
			<Row>
				<ul className={classes.offerings__grid}>
					{items.map((item) => (
						<li key={item.key} className={classes.offerings__item}>
							<div className={classes.offerings__icon}></div>
							<div className={classes.offerings__content}>
								<Heading
									type="hexanary"
									className={classes.offerings__heading}
									textTransform="uppercase"
									color={
										version === 1
											? "var(--color-white-1)"
											: "var(--color-black-1)"
									}
								>
									{item.title}
								</Heading>
								<p className={classes.offerings__text}>{item.text}</p>
							</div>
						</li>
					))}
				</ul>
			</Row>
		</div>
	);
};

export default Offerings;
