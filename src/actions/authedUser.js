import { showLoading } from "react-redux-loading-bar";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export const setAuthedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id,
  };
};

export const handleLogin = (id) => {
  return (dispatch) => {
    dispatch(showLoading());
    return dispatch(setAuthedUser(id));
  };
};
