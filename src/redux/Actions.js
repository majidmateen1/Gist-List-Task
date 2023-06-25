export const SET_GIST_LIST = "SET_GIST_LIST";
export const SET_GIST_LIST_USER_NAME = "SET_GIST_LIST_USER_NAME";
export const GET_USER_NAME = "GET_USER_NAME";

export const setGistList = (gistList) => ({
  type: SET_GIST_LIST,
  payload: gistList,
});

export const setGistListUserName = (gistList) => ({
  type: SET_GIST_LIST_USER_NAME,
  payload: gistList,
});

export const getUserName = (gistList) => ({
  type: GET_USER_NAME,
  payload: gistList,
});
