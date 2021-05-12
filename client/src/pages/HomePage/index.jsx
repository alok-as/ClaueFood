import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Hero, Featured } from "../../containers/Home";

import { fetchAllProducts } from "../../redux/Products/actions";

const HomePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("Home Page is rendered");
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<Fragment>
			<Hero />
			<Featured />
		</Fragment>
	);
};

export default HomePage;
