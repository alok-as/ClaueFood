import React, { useRef, useState, useCallback, useEffect } from "react";
import classes from "./index.module.scss";
import { ProductCard } from "../../UI";

const Slider = ({ data, addProductToCart }) => {
	const slideRef = useRef();
	const containerRef = useRef();
	const [slideWidth, setSlideWidth] = useState(0);
	const [slideFactor, setSlideFactor] = useState(0);
	const [maxSlideFactor, setMaxSlideFactor] = useState(0);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	const onNextSlideHandler = () => {
		setSlideFactor((slideFactor) => {
			const newFactor = slideFactor + slideWidth;
			if (newFactor === maxSlideFactor) {
				setIsNextDisabled(true);
			}
			return newFactor;
		});
	};

	const onPrevSlideHandler = () => {
		setSlideFactor((slideFactor) => {
			const newFactor = slideFactor - slideWidth;
			if (newFactor === maxSlideFactor - slideWidth) {
				setIsNextDisabled(false);
			}

			return newFactor;
		});
	};

	const calculateSlideFactorHandler = useCallback(() => {
		const slideWidth = slideRef.current.offsetWidth + 30;
		setSlideWidth(slideWidth);
	}, []);

	useEffect(() => {
		if (slideWidth) {
			const containerWidth = containerRef.current.offsetWidth;
			const totalSlides = data.length;
			const oneTimeSlides = Math.ceil(containerWidth / slideWidth);
			const remainingSlides = totalSlides - oneTimeSlides;
			setMaxSlideFactor(slideWidth * remainingSlides);
		}
	}, [data, slideWidth]);

	const style = {
		transform: `translateX(-${slideFactor}px)`,
	};

	return (
		<div className={classes.slider}>
			<div className={classes.slider__cards} style={style} ref={containerRef}>
				{data.map((product, index) => (
					<ProductCard
						key={product._id}
						{...product}
						ref={slideRef}
						index={index}
						style={style}
						addProductToCart={addProductToCart}
						calculateSlideFactor={calculateSlideFactorHandler}
					/>
				))}
			</div>
			<div>
				<button
					className={classes.slider__previous}
					onClick={onPrevSlideHandler}
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
