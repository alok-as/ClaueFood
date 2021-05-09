import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import Layout from "./hoc/Layout";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Layout />
			</Router>
		</Provider>
	);
};

export default App;
