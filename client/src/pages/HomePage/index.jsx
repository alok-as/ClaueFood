import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Hero, Display, Featured } from "../../containers/Home";
import { Offerings } from "../../components/UI";
import { fetchAllProducts } from "../../redux/Products/actions";

import gardenImage1 from "../../assets/images/home/garden-1.jpg";
import gardenImage2 from "../../assets/images/home/garden-2.jpg";

import vegetableImage1 from "../../assets/images/home/vegetable-1.jpg";
import vegetableImage2 from "../../assets/images/home/vegetable-2.jpg";

const HomePage = () => {
	const dispatch = useDispatch();

	const [gardenCards, setGardenCards] = useState([
		{
			key: nanoid(),
			imageURL: gardenImage1,
			title: "Fresh peaches fruit",
			discount: "25",
		},
		{
			key: nanoid(),
			imageURL: gardenImage2,
			title: "American apple",
			discount: "25",
		},
	]);

	const [gardenLinks, setGardenLinks] = useState([
		{ key: nanoid(), children: "Fruits", to: "/" },
		{ key: nanoid(), children: "Vegetables", to: "/" },
		{ key: nanoid(), children: "Dried Fruits", to: "/" },
		{ key: nanoid(), children: "Juice", to: "/" },
	]);

	const [vegetableCards, setVegetableCards] = useState([
		{
			key: nanoid(),
			imageURL: vegetableImage1,
			title: "Fresh peaches fruit",
			discount: "25",
		},
		{
			key: nanoid(),
			imageURL: vegetableImage2,
			title: "American apple",
			discount: "25",
		},
	]);

	const [vegetableLinks, setVegetableLinks] = useState([
		{ key: nanoid(), children: "Dark Green", to: "/" },
		{ key: nanoid(), children: "Orange Vegetables", to: "/" },
		{ key: nanoid(), children: "Beas & Peas", to: "/" },
		{ key: nanoid(), children: "Starchy Vegetables", to: "/" },
	]);

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<Fragment>
			<Hero />
			<Featured />
			<Display
				className={classes.home__gardencards}
				title="Garden"
				cards={gardenCards}
				links={gardenLinks}
			/>
			<Display
				className={classes.home__vegetablecards}
				title="Vegetables"
				cards={vegetableCards}
				links={vegetableLinks}
			/>
			<Offerings version={1} />
		</Fragment>
	);
};

export default HomePage;
