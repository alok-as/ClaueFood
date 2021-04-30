import { combineReducers } from "redux";
import authReducer from "./Auth/reducers";

const rootReducer = combineReducers({
	auth: authReducer,
});

export default rootReducer;
