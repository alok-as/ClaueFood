import React from "react";

import classes from "./index.module.scss";
import { DisplayPanel, ProductBanner, Slider } from "../../../components/Home";
import { Section } from "../../../components/UI";

import sampleData from "../../../data/data";

const Display = ({ className, cards, title, links }) => {
	return (
		<Section>
			<ProductBanner className={className} cards={cards} />
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
