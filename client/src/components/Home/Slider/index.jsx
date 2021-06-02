import React, { useRef, useState, useEffect } from "react";
import classes from "./index.module.scss";
import { ProductCard } from "../../UI";

const Slider = ({ data, addProductToCart, numSlides }) => {
	const containerRef = useRef();

	const [isLoading, setIsLoading] = useState(true);
	const [slideWidth, setSlideWidth] = useState(0);
	const [gutterWidth, setGutterWidth] = useState(30);
	const [slideFactor, setSlideFactor] = useState(0);
	const [currentSlideFactor, setCurrentSlideFactor] = useState(0);
	const [maxSlideFactor, setMaxSlideFactor] = useState(0);

	const [isNextDisabled, setIsNextDisabled] = useState(false);
	const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);

	const onNextSlideHandler = () => {
		setCurrentSlideFactor((currentSlideFactor) => {
			const newFactor = currentSlideFactor + slideFactor;

			if (newFactor === maxSlideFactor) {
				setIsNextDisabled(true);
			}

			if (currentSlideFactor === 0) {
				setIsPreviousDisabled(false);
			}

			return newFactor;
		});
	};

	const onPrevSlideHandler = () => {
		setCurrentSlideFactor((currentSlideFactor) => {
			const newFactor = currentSlideFactor - slideFactor;

			if (newFactor === 0) {
				setIsPreviousDisabled(true);
			}

			if (newFactor === maxSlideFactor - slideFactor) {
				setIsNextDisabled(false);
			}

			return newFactor;
		});
	};

	useEffect(() => {
		const containerWidth = containerRef.current.offsetWidth;
		const availableWidth = containerWidth - (numSlides - 1) * gutterWidth;
		const slideWidth = availableWidth / numSlides;
		setSlideWidth(slideWidth);
		setSlideFactor(slideWidth + gutterWidth);

		setIsLoading(false);

		const totalSlides = data.length;
		const remainingSlides = totalSlides - numSlides;
		setMaxSlideFactor((slideWidth + gutterWidth) * remainingSlides);
	}, [numSlides, data, setSlideWidth, setMaxSlideFactor, gutterWidth]);

	const style = {
		transform: `translateX(-${currentSlideFactor}px)`,
	};

	return (
		<div className={classes.slider}>
			<div className={classes.slider__cards} style={style} ref={containerRef}>
				{!isLoading &&
					data.map((product, index) => (
						<ProductCard
							key={product._id}
							{...product}
							index={index}
							productWidth={`${slideWidth / 10}rem`}
							addProductToCart={addProductToCart}
						/>
					))}
			</div>
			<div>
				<button
					className={classes.slider__previous}
					onClick={onPrevSlideHandler}
					disabled={isPreviousDisabled}
				>
					Prev
				</button>
				<button
					className={classes.slider__next}
					onClick={onNextSlideHandler}
					disabled={isNextDisabled}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Slider;
