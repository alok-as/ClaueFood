import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";
import cartReducer from "./Cart/reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
});

export default rootReducer;
