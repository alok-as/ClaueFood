import React, { Fragment, useState, useEffect } from "react";
import { Row } from "../../../hoc";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";

const Banner = ({ path }) => {
	const [title, setTitle] = useState("");

	const parseRoutePathHandler = (path) => {
		const startIndex = path.lastIndexOf("/") + 1;
		const title = path.slice(startIndex).replaceAll("-", " ");
		setTitle(title);
	};

	useEffect(() => {
		parseRoutePathHandler(path);
	}, [path]);

	return (
		<Fragment>
			<div className={classes.banner}>
				<p>{title}</p>
			</div>
			<div className={classes.router}>
				<Row className={classes.router__content}>
					<Link to="/" className={classes.router__link}>
						Home
					</Link>
					<Link to={path} className={classes.router__link}>
						{title}
					</Link>
				</Row>
			</div>
		</Fragment>
	);
};

export default Banner;
