import React from "react";
import classes from "./index.module.scss";

import { Row } from "../../../hoc";
import {
	ExistingCustomer,
	CustomerHeader,
	NewCustomer,
} from "../../../components/CustomerLogin";

const CustomerForm = () => {
	return (
		<section className={classes.customer}>
			<Row>
				<CustomerHeader />
				<div className={classes.customer__main}>
					<ExistingCustomer />
					<NewCustomer />
				</div>
			</Row>
		</section>
	);
};

export default CustomerForm;
