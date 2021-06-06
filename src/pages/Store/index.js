import { loginReducer } from "./loginReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";

const store = createStore(combineReducers({ user: loginReducer }));

export default store;
