import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Button, Heading, Quantity } from "../../UI";
import { Fragment } from "react";

const ProductContent = ({ details, addProductToCart }) => {
	const [characterstics, setCharacterstics] = useState([]);

	const addProductToCartHandler = () => {
		const { _id, imageSrc, title, price } = details;
		addProductToCart(_id, { imageSrc, title, price });
	};

	useEffect(() => {
		if (details?.characterstics && details.characterstics.length) {
			const characterstics = details.characterstics.map((characterstic) => ({
				key: nanoid(),
				text: characterstic,
			}));
			setCharacterstics(characterstics);
		}
	}, [details]);

	let pricingUI;

	if (details) {
		if (details.discountedPrice) {
			pricingUI = (
				<Fragment>
					<del className={classes.content__discount}>
						${details.price.toFixed(2)}
					</del>
					<span className={classes.content__price}>
						{details.discountedPrice &&
							`$${details.discountedPrice.toFixed(2)}`}
					</span>
				</Fragment>
			);
		} else {
			pricingUI = (
				<span className={classes.content__price}>
					{details.price && `$${details.price.toFixed(2)}`}
				</span>
			);
		}
	}

	return (
		details && (
			<div className={classes.content__info}>
				<Heading type="pentanary">{details.title}</Heading>
				{!details.reviews.length && (
					<small className={classes.content__reviews}>
						Be the first to review this product
					</small>
				)}

				<p className={classes.content__pricing}>{pricingUI}</p>

				<ul className={classes.content__list}>
					{characterstics.map((characterstic) => (
						<li key={characterstic.key} className={classes.content__item}>
							{characterstic.text}
						</li>
					))}
				</ul>
				<p className={classes.content__text}>{details.description}</p>
				<div className={classes.content__options}>
					<Quantity stock={details.stock} />
					<Button
						className={classes.content__button}
						color="green"
						onClick={addProductToCartHandler}
					>
						Add to Cart
					</Button>
				</div>
				<p className={classes.content__meta}>
					<span className={classes.content__key}>Availabilty:</span>
					{details.stock > 0 ? (
						<span className={classes.content__value}>In Stock</span>
					) : (
						<span className={classes.content__outstock}>Out of Stock</span>
					)}
				</p>
				<p className={classes.content__meta}>
					<span className={classes.content__key}>SKU:</span>
					<span className={classes.content__value}>
						Quae Ab Illo Inventore Veritatis Dolourm-1
					</span>
				</p>
			</div>
		)
	);
};

export default ProductContent;
