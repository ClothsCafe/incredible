import { combineReducers } from "redux";
import cartReducer from "./cartReducers";

const allReducers = combineReducers({
    cartItems: cartReducer
})

export default allReducers;