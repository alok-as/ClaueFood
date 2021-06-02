import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { DisplayPanel, Slider } from "../../../components/Home";
import { Card, Section } from "../../../components/UI";

import VegetableImage1 from "../../../assets/images/home/vegetable-1.jpg";
import VegetableImage2 from "../../../assets/images/home/vegetable-2.jpg";

import sampleData from "../../../data/data";

const Display = ({ title }) => {
	const [cards, setCards] = useState([
		{
			key: nanoid(),
			imageURL: VegetableImage1,
			title: "Fresh peaches fruit",
			discount: "25",
		},
		{
			key: nanoid(),
			imageURL: VegetableImage2,
			title: "American apple",
			discount: "25",
		},
	]);

	const [links, setLinks] = useState([
		{ key: nanoid(), children: "Fruits" },
		{ key: nanoid(), children: "Vegetables" },
		{ key: nanoid(), children: "Dried Fruits" },
		{ key: nanoid(), children: "Juice" },
	]);

	return (
		<Section>
			<div className={classes.display__cards}>
				{cards.map((card) => (
					<Card {...card} />
				))}
			</div>
			<div className={classes.display__container}>
				<DisplayPanel title={title} links={links} />
				<div className={classes.display__slider}>
					<Slider data={sampleData} numSlides={4} />
				</div>
			</div>
		</Section>
	);
};

export default Display;
