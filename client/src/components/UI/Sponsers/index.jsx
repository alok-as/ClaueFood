import React, { useState } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";
import { Row } from "../../../hoc";

import sponserImage1 from "../../../assets/images/common/sponser-1.png";
import sponserImage2 from "../../../assets/images/common/sponser-2.png";
import sponserImage3 from "../../../assets/images/common/sponser-3.png";
import sponserImage4 from "../../../assets/images/common/sponser-4.png";
import sponserImage5 from "../../../assets/images/common/sponser-5.png";

const Sponsers = () => {
	const [sponsers, setSponsers] = useState([
		{ key: nanoid(), imageURL: sponserImage1, title: "" },
		{ key: nanoid(), imageURL: sponserImage2, title: "" },
		{ key: nanoid(), imageURL: sponserImage3, title: "" },
		{ key: nanoid(), imageURL: sponserImage4, title: "" },
		{ key: nanoid(), imageURL: sponserImage5, title: "" },
	]);

	return (
		<div className={classes.sponsers}>
			<Row className={classes.sponsers__content}>
				<ul className={classes.sponsers__list}>
					{sponsers.map((sponser) => (
						<li key={sponser.key}>
							<img src={sponser.imageURL} alt={sponser.title} />
						</li>
					))}
				</ul>
			</Row>
		</div>
	);
};

export default Sponsers;
