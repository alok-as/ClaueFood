import { combineReducers } from "redux";

import authReducer from "./Auth/reducer";
import cartReducer from "./Cart/reducer";
import productsReducer from "./Products/reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	products: productsReducer,
});

export default rootReducer;
