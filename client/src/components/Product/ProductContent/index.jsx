import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Button, Heading, Quantity } from "../../UI";

const ProductContent = ({ addProductToCart }) => {
	const [characterstics, setCharacterstics] = useState([
		{ _id: nanoid(), text: "Side pockets" },
		{ _id: nanoid(), text: "Wide-cut legs" },
		{ _id: nanoid(), text: "Zip-back fastening" },
		{ _id: nanoid(), text: "Regular fit - true to size" },
		{ _id: nanoid(), text: "Machine wash" },
		{ _id: nanoid(), text: "100% Cotton" },
		{
			_id: nanoid(),
			text: "Our model wears a UK 8/EU 36/US 4 and is 176cm/5'9.5",
		},
	]);

	return (
		<div className={classes.content__info}>
			<Heading type="pentanary">Quae Ab Illo Dolourm</Heading>
			<small className={classes.content__reviews}>
				Be the first to review this product
			</small>
			<p className={classes.content__pricing}>
				<del className={classes.content__discount}>$150.00</del>
				<span className={classes.content__price}>$120.00</span>
			</p>

			<ul className={classes.content__list}>
				{characterstics.map((characterstic) => (
					<li key={characterstic._id} className={classes.content__item}>
						{characterstic.text}
					</li>
				))}
			</ul>
			<p className={classes.content__text}>
				Go sporty this summer with this vintage navy and white striped v-neck
				t-shirt from the Nike. Perfect for pairing with denim and white kicks
				for a stylish sporty vibe.
			</p>
			<div className={classes.content__options}>
				<Quantity stock={24} />
				<Button
					className={classes.content__button}
					color="green"
					onClick={() => addProductToCart("productId")}
				>
					Add to Cart
				</Button>
			</div>
			<p className={classes.content__meta}>
				<span className={classes.content__key}>Availabilty:</span>
				<span className={classes.content__value}>In stock</span>
			</p>
			<p className={classes.content__meta}>
				<span className={classes.content__key}>SKU:</span>
				<span className={classes.content__value}>
					Quae Ab Illo Inventore Veritatis Dolourm-1
				</span>
			</p>
		</div>
	);
};

export default ProductContent;
