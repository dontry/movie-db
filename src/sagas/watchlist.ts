import { all, call, put, takeLatest } from "redux-saga/effects";
import { clientAPI } from "api";
import {
  ADD_TO_WATCHLIST_SUCCESS,
  ADD_TO_WATCHLIST_FAILURE,
  REMOVE_FROM_WATCHLIST_SUCCESS,
  REMOVE_FROM_WATCHLIST_FAILURE,
  ADD_TO_WATCHLIST_REQUEST,
  REMOVE_FROM_WATCHLIST_REQUEST,
  FETCH_WATCHLIST_REQUEST,
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILURE
} from "actions/watchlist";
import { Show } from "models/Show";

function* fetchWatchList(action: any) {
  try {
    const res = yield call(clientAPI.getWatchList.bind(clientAPI));
    yield put({
      type: FETCH_WATCHLIST_SUCCESS,
      payload: res.results
    });
  } catch (e) {
    yield put({
      type: FETCH_WATCHLIST_FAILURE,
      meta: {
        type: "error",
        message: "Fail to fetch watchlist."
      }
    });
  }
}

function* addToWatchList(action: any) {
  const show: Show = action.payload;
  try {
    yield call(clientAPI.addToWatchList.bind(clientAPI), show.id);
    yield put({
      type: ADD_TO_WATCHLIST_SUCCESS,
      payload: show
    });
  } catch (e) {
    yield put({
      type: ADD_TO_WATCHLIST_FAILURE,
      meta: {
        type: "error",
        message: `Fail to add the TV show to watchlist.`
      }
    });
  }
}

function* removeFromWatchList(action: any) {
  const show = action.payload;
  try {
    yield call(clientAPI.removeFromWatchList.bind(clientAPI), show.id);
    yield put({
      type: REMOVE_FROM_WATCHLIST_SUCCESS,
      payload: show
    });
  } catch (e) {
    yield put({
      type: REMOVE_FROM_WATCHLIST_FAILURE,
      meta: {
        type: "error",
        message: `Fail to remove the TV show from watchlist.`
      }
    });
  }
}

function* watcher() {
  yield all([takeLatest(FETCH_WATCHLIST_REQUEST, fetchWatchList)]);
  yield all([takeLatest(ADD_TO_WATCHLIST_REQUEST, addToWatchList)]);
  yield all([takeLatest(REMOVE_FROM_WATCHLIST_REQUEST, removeFromWatchList)]);
}

export default watcher;
