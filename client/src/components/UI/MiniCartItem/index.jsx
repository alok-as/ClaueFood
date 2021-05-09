import React from "react";
import classes from "./index.module.scss";

const MiniCartItem = ({ quantity, title, price }) => {
	return <li className={classes.item}>{title}</li>;
};

export default MiniCartItem;
