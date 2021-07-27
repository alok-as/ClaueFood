import React from "react";
import PropTypes from "prop-types";
import { Heading } from "../../UI";
import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const ProfileCard = ({ title, subtitle, details }) => {
	const finalTitleClasses = [classes.profile__title];
	const finalSubtitleClasses = [classes.profile__subtitle];

	if (title) {
		finalTitleClasses.push(classes.profile__margin1);
	} else {
		finalSubtitleClasses.push(classes.profile__margin2);
	}

	return (
		<div className={classes.profile__card}>
			{title && (
				<Heading
					type="quaternary"
					className={combineClasses(finalTitleClasses)}
				>
					{title}
				</Heading>
			)}
			{subtitle && (
				<Heading
					type="pentanary"
					className={combineClasses(finalSubtitleClasses)}
				>
					{subtitle}
				</Heading>
			)}
			{details.length
				? details.map((detail) => (
						<p className={classes.profile__detail}>{detail}</p>
				  ))
				: null}
		</div>
	);
};

ProfileCard.defaultProps = {
	details: [],
};

ProfileCard.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	details: PropTypes.array,
};

export default ProfileCard;
