import React from "react";
import classes from "./index.module.scss";

const LoginHeader = () => {
	return (
		<div className={classes.customer__header}>
			<button>Facebook</button>
			<button>Google</button>
			<button>Twitter</button>
		</div>
	);
};

export default LoginHeader;
