import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Card, Section } from "../../../components/UI";
import { FeaturedItem } from "../../../components/Home";

import featureImage1 from "../../../assets/images/Home/featured-1.jpg";
import featureImage2 from "../../../assets/images/Home/featured-2.jpg";

import productImage1 from "../../../assets/images/Home/product-1.jpg";
import productImage2 from "../../../assets/images/Home/product-2.jpg";
import ProductCard from "../../../components/UI/ProductCard";

const Featured = () => {
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

	const [products, setProducts] = useState([
		{
			key: nanoid(),
			title: "Fresh organic peaches",
			image1: productImage1,
			image2: productImage2,
			actualPrice: "$150.00",
			discountedPrice: "$120.00",
		},
		{
			key: nanoid(),
			title: "Fresh organic peaches",
			image1: productImage1,
			image2: productImage2,
			actualPrice: "$150.00",
			discountedPrice: "$120.00",
		},
		{
			key: nanoid(),
			title: "Fresh organic peaches",
			image1: productImage1,
			image2: productImage2,
			actualPrice: "$150.00",
			discountedPrice: "$120.00",
		},
		{
			key: nanoid(),
			title: "Fresh organic peaches",
			image1: productImage1,
			image2: productImage2,
			actualPrice: "$150.00",
			discountedPrice: "$120.00",
		},
		{
			key: nanoid(),
			title: "Fresh organic peaches",
			image1: productImage1,
			image2: productImage2,
			actualPrice: "$150.00",
			discountedPrice: "$120.00",
		},
		{
			key: nanoid(),
			title: "Fresh organic peaches",
			image1: productImage1,
			image2: productImage2,
			actualPrice: "$150.00",
			discountedPrice: "$120.00",
		},
	]);

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

	return (
		<Section>
			<div className={classes.featured__cards}>
				{cards.map((card) => (
					<Card {...card} />
				))}
			</div>
			<div className={classes.featured__menu}>
				<ul className={classes.featured__list}>
					{categories.map((category, index) => (
						<FeaturedItem
							{...category}
							onClick={() => selectCategoryHandler(index)}
						/>
					))}
				</ul>
			</div>
			<div className={classes.featured__products}>
				{products.map((product) => (
					<ProductCard {...product} />
				))}
			</div>
		</Section>
	);
};

export default Featured;
