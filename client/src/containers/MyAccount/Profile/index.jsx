import React, { useState } from "react";
import { nanoid } from "nanoid";
import classes from "./index.module.scss";
import { ProfileCard } from "../../../components/MyAccount";

const Profile = () => {
	const [cards, setCards] = useState([
		{
			key: nanoid(),
			title: "Personal Information",
			details: ["Alok Sharma", "alok.sharma61630@gmail.com"],
		},
		{
			key: nanoid(),
			title: "Newsletters",
			details: ["You don't subscribe to our newsletter."],
		},
		{
			key: nanoid(),
			title: "Address Book",
			subtitle: "Default Billing Address",
			details: ["You have not set a default billing address."],
		},
		{
			key: nanoid(),
			subtitle: "Default Shipping Address",
			details: ["You have not set a default shipping address."],
		},
	]);

	return (
		<div className={classes.profile__grid}>
			{cards.map((card) => (
				<ProfileCard {...card} />
			))}
		</div>
	);
};

export default Profile;
