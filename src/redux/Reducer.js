import { combineReducers } from "redux";
import {
  GET_USER_NAME,
  SET_GIST_LIST,
  SET_GIST_LIST_USER_NAME,
} from "../redux/Actions";

const gistListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_GIST_LIST:
      return action.payload;

    case SET_GIST_LIST_USER_NAME:
      console.log("reducerrrrrrrr1");
      return action.payload;

    default:
      return state;
  }
};

const gistUserName = (state = [], action) => {
  console.log("rrrrrrrrr", action);
  switch (action.type) {
    case GET_USER_NAME:
      console.log("reducerrrrrrrr2");
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  gistList: gistListReducer,
  getUserName: gistUserName,
});

export default rootReducer;
