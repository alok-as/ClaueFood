import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(children, document.getElementById("popups"))}
		</Fragment>
	);
};

export default Portal;
