export const FETCH_USER_DETAIL_REQUEST = "FETCH_USER_DETAIL_REQUEST";
export const FETCH_USER_DETAIL_FAILURE = "FETCH_USER_DETAIL_FAILURE";
export const FETCH_USER_DETAIL_SUCCESS = "FETCH_USER_DETAIL_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const LOGIN = "LOGIN";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = () => ({
  type: LOGIN
});

export const logout = () => ({
  type: LOGOUT
});
