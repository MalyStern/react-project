import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { userReducer } from "./UserReducer";

export const allReducers = combineReducers({
    userReducer: userReducer,
    productReducer: productReducer
})