import React from "react";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";
import { combineClasses } from "../../../utils";

const Section = ({ className, children }) => {
	const finalClasses = [classes.section];
	if (className) {
		finalClasses.push(className);
	}

	return (
		<section className={combineClasses(finalClasses)}>
			<Row>{children}</Row>
		</section>
	);
};

export default Section;
