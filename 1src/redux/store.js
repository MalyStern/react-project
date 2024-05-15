import { applyMiddleware, createStore } from "redux";
import { allReducers } from "./reducers";
import { addUserMW } from "./middleware/UserMiddleWare";

const store = createStore(
    allReducers, applyMiddleware(addUserMW, )
)
store.getState()
export default store