import React, { useState, useEffect } from "react";
import classes from "./index.module.scss";
import { ProductSlide } from "../index";

const Slider = ({ images }) => {
	const [slideFactor, setSlideFactor] = useState(0);
	const [maxSlideFactor, setMaxSlideFactor] = useState(0);
	const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	const onPreviousSlideHandler = () => {
		setSlideFactor((slideFactor) => {
			const newFactor = slideFactor - 100;

			if (newFactor === 0) {
				setIsPreviousDisabled(true);
			}

			if (slideFactor === maxSlideFactor) {
				setIsNextDisabled(false);
			}

			return newFactor;
		});
	};

	const onNextSlideHandler = () => {
		setSlideFactor((slideFactor) => {
			const newFactor = slideFactor + 100;

			if (slideFactor === 0) {
				setIsPreviousDisabled(false);
			}

			if (newFactor === maxSlideFactor) {
				setIsNextDisabled(true);
			}

			return newFactor;
		});
	};

	useEffect(() => {
		if (images.length) {
			setMaxSlideFactor((images.length - 1) * 100);
		}
	}, [images, maxSlideFactor]);

	const style = {
		transform: `translateX(-${slideFactor}%)`,
	};

	return (
		<div className={classes.slider}>
			<div className={classes.slider__container} style={style}>
				{images.map((image) => (
					<ProductSlide {...image} />
				))}
			</div>
			<button
				className={classes.slider__previous}
				onClick={onPreviousSlideHandler}
				disabled={isPreviousDisabled}
			>
				Previous
			</button>
			<button
				className={classes.slider__next}
				onClick={onNextSlideHandler}
				disabled={isNextDisabled}
			>
				Next
			</button>
		</div>
	);
};

export default Slider;
