import React, { Fragment } from "react";
import {
	useLocation,
	useRouteMatch,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { Banner } from "../../components/UI";
import { Row } from "../../hoc";
import {
	AccountNavigation,
	MyOrders,
	MyWishlist,
	NewsletterSubscription,
	Profile,
} from "../../containers/MyAccount";
import classes from "./index.module.scss";

const MyAccountPage = () => {
	const { pathname } = useLocation();
	const { path, url } = useRouteMatch();

	return (
		<Fragment>
			<Banner path={pathname} />
			<Row className={classes.account}>
				<AccountNavigation url={url} />
				<section className={classes.account__details}>
					<Switch>
						<Route path={`${path}/profile`} component={Profile} />
						<Route path={`${path}/my-orders`} component={MyOrders} />
						<Route path={`${path}/my-wishlist`} component={MyWishlist} />
						<Route
							path={`${path}/newsletter-subscription`}
							component={NewsletterSubscription}
						/>
						<Route path={`${path}`}>
							<Redirect to={`${path}/profile`} />
						</Route>
					</Switch>
				</section>
			</Row>
		</Fragment>
	);
};

export default MyAccountPage;
