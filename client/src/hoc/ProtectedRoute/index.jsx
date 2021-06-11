import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated } = useSelector((state) => state.auth.authDetails);

	if (isAuthenticated) {
		return <Route {...rest} render={(props) => <Component {...props} />} />;
	}

	return <Redirect to={rest.redirect} />;
};

export default ProtectedRoute;
