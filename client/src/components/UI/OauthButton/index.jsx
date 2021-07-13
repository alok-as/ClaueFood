import React from "react";
import { combineClasses } from "../../../utils";
import classes from "./index.module.scss";

const OauthButton = ({ type }) => {
	const finalClasses = [classes.oauth];

	const onOauthLoginHandler = () => {
		window.location.href = `${process.env.REACT_APP_SERVER_URL}/api/user/${type}-login`;
	};

	switch (type) {
		case "google":
			finalClasses.push(classes.oauth__google);
			break;
		case "facebook":
			finalClasses.push(classes.oauth__facebook);
			break;
		case "twitter":
			finalClasses.push(classes.oauth__twitter);
			break;
		default:
			finalClasses.push(classes.oauth__google);
			break;
	}

	return (
		<button
			className={combineClasses(finalClasses)}
			onClick={onOauthLoginHandler}
		>
			Sign In with <span>{type}</span>
		</button>
	);
};

export default OauthButton;
