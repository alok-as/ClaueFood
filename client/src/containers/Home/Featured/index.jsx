import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Card, Section, SectionTitle } from "../../../components/UI";
import { FeaturedTabs, Slider } from "../../../components/Home";

import featureImage1 from "../../../assets/images/home/featured-1.jpg";
import featureImage2 from "../../../assets/images/home/featured-2.jpg";

import { addProductToCart } from "../../../redux/Cart/actions";
import { setFeaturedProducts } from "../../../redux/Products/actions";

const Featured = () => {
	const dispatch = useDispatch();

	const { isLoading, products } = useSelector(
		(state) => state.products.featuredDetails
	);
	const [selectedCategory, setSelectedCategory] = useState("featured");

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
			category: "featured",
			isActive: true,
		},
		{
			key: nanoid(),
			children: "Best seller",
			category: "bestseller",
			isActive: false,
		},
		{
			key: nanoid(),
			children: "Special",
			category: "special",
			isActive: false,
		},
		{
			key: nanoid(),
			children: "Latest",
			category: "latest",
			isActive: false,
		},
	]);

	useEffect(() => {
		fetchFeaturedProductsHandler(selectedCategory);
	}, [selectedCategory]);

	const selectCategoryHandler = (selectedCategory) => {
		const newCategories = [...categories];
		newCategories.forEach((category) => {
			if (category.category.includes(selectedCategory)) {
				category.isActive = true;
			} else {
				category.isActive = false;
			}
		});

		setSelectedCategory(selectedCategory);
		setCategories(newCategories);
	};

	const fetchFeaturedProductsHandler = (category) => {
		dispatch(setFeaturedProducts({ category }));
	};

	const addProductToCartHandler = useCallback(
		(productId, modalData) => {
			dispatch(addProductToCart(productId, modalData));
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
			{isLoading ? (
				<p>Loading.....</p>
			) : (
				<Slider
					data={products[selectedCategory]}
					addProductToCart={addProductToCartHandler}
					numSlides={5}
					withOptions={true}
				/>
			)}
		</Section>
	);
};

export default memo(Featured);
