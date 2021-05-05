import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Card, Section } from "../../../components/UI";

import featureImage1Url from "../../../assets/images/Home/featured-1.jpg";
import featureImage2Url from "../../../assets/images/Home/featured-2.jpg";

const Featured = () => {
	const [cards, setCards] = useState([
		{
			key: nanoid(),
			imageURL: featureImage1Url,
			title: "Fresh peaches fruit",
			discount: "25",
		},
		{
			key: nanoid(),
			imageURL: featureImage2Url,
			title: "American apple",
			discount: "25",
		},
	]);

	return (
		<Section>
			<div className={classes.featured__cards}>
				{cards.map((card) => (
					<Card {...card} />
				))}
			</div>
		</Section>
	);
};

export default Featured;
