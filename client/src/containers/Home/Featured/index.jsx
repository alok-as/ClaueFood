import React, { useState, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Card, Section, SectionTitle } from "../../../components/UI";
import { FeaturedTabs, Slider } from "../../../components/Home";

import featureImage1 from "../../../assets/images/home/featured-1.jpg";
import featureImage2 from "../../../assets/images/home/featured-2.jpg";

import { addProductToCart } from "../../../redux/Cart/actions";
import sampleData from "../../../data/data";

const Featured = () => {
	const dispatch = useDispatch();

	const [cards, setCards] = useState([
		{
			key: nanoid(),
			imageURL: featureImage1,
			title: "Fresh peaches fruit",
			discount: "25",
		},
		{
			key: nanoid(),
			imageURL: featureImage2,
			title: "American apple",
			discount: "25",
		},
	]);

	const [categories, setCategories] = useState([
		{
			key: nanoid(),
			children: "Featured",
			isActive: true,
		},
		{
			key: nanoid(),
			children: "Best seller",
			isActive: false,
		},
		{
			key: nanoid(),
			children: "Special",
			isActive: false,
		},
		{
			key: nanoid(),
			children: "Latest",
			isActive: false,
		},
	]);

	const { products } = useSelector((state) => state.products.productsDetails);

	const [selectedCategory, setSelectedCategory] = useState(0);

	const selectCategoryHandler = (selectedIndex) => {
		const newCategories = [...categories];
		newCategories.forEach((category, index) => {
			if (index === selectedIndex) {
				category.isActive = true;
			} else {
				category.isActive = false;
			}
		});
		setSelectedCategory(selectedIndex);
		setCategories(newCategories);
	};

	const addProductToCartHandler = useCallback(
		(productId) => {
			dispatch(addProductToCart(productId));
		},
		[dispatch]
	);

	return (
		<Section>
			<div className={classes.featured__cards}>
				{cards.map((card) => (
					<Card {...card} />
				))}
			</div>
			<div className={classes.featured__title}>
				<SectionTitle>Fresh Food</SectionTitle>
			</div>
			<FeaturedTabs tabs={categories} onClick={selectCategoryHandler} />
			<Slider
				data={sampleData}
				addProductToCart={addProductToCartHandler}
				numSlides={5}
			/>
		</Section>
	);
};

export default memo(Featured);
