import React, { Fragment } from "react";
import { Hero, Featured, PopularDisplay } from "../../containers/Home";
import { Offerings, Sponsers } from "../../components/UI";

const HomePage = () => {
	return (
		<Fragment>
			<Hero />
			<Featured />
			<PopularDisplay />
			<Sponsers />
			<Offerings version={1} />
		</Fragment>
	);
};

export default HomePage;
