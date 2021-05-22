import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Layout, RouteScroller } from "./hoc";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<RouteScroller>
					<Layout />
				</RouteScroller>
			</Router>
		</Provider>
	);
};

export default App;
