import React, { Fragment } from "react";
import { Hero, Featured } from "../../containers/Home";

const HomePage = () => {
	return (
		<Fragment>
			<Hero />
			<Featured />
		</Fragment>
	);
};

export default HomePage;
