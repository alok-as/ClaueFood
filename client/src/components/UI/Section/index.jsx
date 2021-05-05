import React from "react";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";

const Section = ({ className, children }) => {
	const finalClass = [classes.section];
	if (className) {
		finalClass.push(className);
	}

	return (
		<section className={finalClass.join(" ")}>
			<Row>{children}</Row>
		</section>
	);
};

export default Section;
