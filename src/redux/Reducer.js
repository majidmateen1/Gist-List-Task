import { combineReducers } from "redux";
import {
  GET_USER_NAME,
  SET_GIST_LIST,
  SET_GIST_LIST_USER_NAME,
} from "../redux/Actions";

// Reducer for managing the gist list state and gist list by user name
const gistListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_GIST_LIST:
      return action.payload;

    case SET_GIST_LIST_USER_NAME:
      return action.payload;

    default:
      return state;
  }
};

// Reducer for managing the username state
const gistUserName = (state = [], action) => {
  switch (action.type) {
    case GET_USER_NAME:
      return action.payload;

    default:
      return state;
  }
};

// Combine the reducers into a root reducer
const rootReducer = combineReducers({
  gistList: gistListReducer,
  getUserName: gistUserName,
});

export default rootReducer;
