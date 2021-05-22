import React, { useEffect } from "react";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";

const RouteScroller = ({ children }) => {
	const history = useHistory();

	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scroll({
				top: 0,
				behavior: "smooth",
			});
		});

		return () => {
			unlisten();
		};
	}, []);

	return <Fragment>{children}</Fragment>;
};

export default RouteScroller;
