import React, { useState, useEffect } from "react";
import classes from "./index.module.scss";
import { nanoid } from "nanoid";
import { Slide } from "../../../components/UI";

import slideImage1 from "../../../assets/images/Home/hero-slide-1.jpg";
import slideImage2 from "../../../assets/images/Home/hero-slide-2.jpg";

const Hero = () => {
	const [slides, setSlides] = useState([
		{
			key: nanoid(),
			imageURL: slideImage1,
			heading: "Organic Vegetables",
			subheading: "Special discount on Sale",
			text: "We supply high quality",
			isVisible: true,
		},
		{
			key: nanoid(),
			imageURL: slideImage2,
			heading: "Purely Organic Fruits",
			subheading: "Special discount on Sale",
			text: "We supply high quality",
			isVisible: false,
		},
	]);

	const [activeSlide, setActiveSlide] = useState(0);
	const [animationInterval, setAnimationInterval] = useState(null);

	const nextSlideHandler = () => {
		const newSlides = [...slides];

		setActiveSlide((activeSlide) => {
			if (activeSlide + 1 > slides.length - 1) {
				newSlides.forEach((slide, index) => {
					if (index === 0) {
						slide.isVisible = true;
					} else {
						slide.isVisible = false;
					}
				});

				return 0;
			} else {
				newSlides.forEach((slide, index) => {
					if (activeSlide + 1 === index) {
						slide.isVisible = true;
					} else {
						slide.isVisible = false;
					}
				});
				return activeSlide + 1;
			}
		});

		setSlides(newSlides);
		clearIntervalHandler();
	};

	const autoSlideChangeHandler = () => {
		const interval = setInterval(() => {
			nextSlideHandler();
		}, 4000);
		setAnimationInterval(interval);
	};

	const clearIntervalHandler = () => {
		clearInterval(animationInterval);
		setAnimationInterval(null);
	};

	useEffect(() => {
		autoSlideChangeHandler();
		return () => {
			clearIntervalHandler();
		};
	}, []);

	return (
		<section className={classes.hero}>
			<div className={classes.hero__slider}>
				{slides.map((slide) => (
					<Slide {...slide} />
				))}
				<button className={classes.hero__button} onClick={nextSlideHandler}>
					CHANGED
				</button>
			</div>
		</section>
	);
};

export default Hero;
