import { combineReducers } from "redux";

import authReducer from "./Auth/reducer";
import cartReducer from "./Cart/reducer";
import productsReducer from "./Products/reducer";
import checkoutReducer from "./Checkout/reducer";
import wishlistReducer from "./WishList/reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	products: productsReducer,
	checkout: checkoutReducer,
	wishlist: wishlistReducer,
});

export default rootReducer;
