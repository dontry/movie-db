import { all, call, put, takeLatest } from "redux-saga/effects";
import { clientAPI } from "api";
import {
  LOGOUT,
  LOGOUT_FAILURE,
  FETCH_USER_DETAIL_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "actions/user";
import { User } from "models/User";
import { ADD_TO_WATCHLIST_REQUEST } from "actions/watchlist";

function* logout() {
  try {
    yield call(clientAPI.logout.bind(clientAPI));
    yield put({
      type: LOGOUT_SUCCESS
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
      meta: {
        type: "error",
        message: `Log out failed`,
        extra: e.message
      }
    });
  }
}

function* login() {
  try {
    yield call(clientAPI.createSessionID.bind(clientAPI));
    const user: User = yield call(clientAPI.getUserDetail.bind(clientAPI));
    yield put({
      type: FETCH_USER_DETAIL_SUCCESS,
      payload: user
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      meta: {
        type: "error",
        message: `Log in failed`,
        extra: e.message
      }
    });
  }
}

function* watcher() {
  yield all([takeLatest(LOGOUT, logout)]);
  yield all([takeLatest(LOGIN, login)]);
}

export default watcher;
