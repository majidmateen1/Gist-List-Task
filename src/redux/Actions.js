export const SET_GIST_LIST = "SET_GIST_LIST";
export const SET_GIST_LIST_USER_NAME = "SET_GIST_LIST_USER_NAME";
export const GET_USER_NAME = "GET_USER_NAME";

// Action to set the gist list
export const setGistList = (gistList) => ({
  type: SET_GIST_LIST,
  payload: gistList,
});

// Action to set the gist list for a specific username
export const setGistListUserName = (gistList) => ({
  type: SET_GIST_LIST_USER_NAME,
  payload: gistList,
});

// Action to get the username
export const getUserName = (gistList) => ({
  type: GET_USER_NAME,
  payload: gistList,
});
