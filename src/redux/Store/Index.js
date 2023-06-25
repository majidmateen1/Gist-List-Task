import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer";

// Define any middleware you want to use (e.g., thunk)
const middleware = [thunk];

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
