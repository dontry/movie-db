import { all, call, put, takeLatest, take, takeEvery } from "redux-saga/effects";
import { clientAPI } from "api";
import {
  ADD_TO_WATCHLIST_SUCCESS,
  ADD_TO_WATCHLIST_FAILURE,
  REMOVE_FROM_WATCHLIST_SUCCESS,
  REMOVE_FROM_WATCHLIST_FAILURE,
  ADD_TO_WATCHLIST_REQUEST,
  REMOVE_FROM_WATCHLIST_REQUEST
} from "actions/watchlist";
import { User } from "models/User";
import { Show } from "models/Show";

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
  yield all([takeLatest(ADD_TO_WATCHLIST_REQUEST, addToWatchList)]);
  yield all([takeLatest(REMOVE_FROM_WATCHLIST_REQUEST, removeFromWatchList)]);
}

export default watcher;
