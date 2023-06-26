import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer";

// Define middleware
const middleware = [thunk];

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
