import thunk from "redux-thunk";
import { fetchReducer } from "../reducers/fetchReducer";

const { createStore, applyMiddleware } = require("redux");


const store=createStore(fetchReducer,applyMiddleware(thunk));
export default store;