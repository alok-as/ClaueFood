import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Hero, Featured, Vegetable } from "../../containers/Home";
import { Offerings } from "../../components/UI";
import { fetchAllProducts } from "../../redux/Products/actions";

const HomePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<Fragment>
			<Hero />
			<Featured />
			<Vegetable />
			<Offerings version={1} />
		</Fragment>
	);
};

export default HomePage;
