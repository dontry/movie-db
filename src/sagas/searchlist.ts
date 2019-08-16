import { all, call, put, takeLatest } from "redux-saga/effects";
import { clientAPI } from "api";
import {
  FETCH_SEARCHLIST_REQUEST,
  FETCH_SEARCHLIST_SUCCESS,
  FETCH_SEARCHLIST_FAILURE
} from "actions/searchlist";

function* fetchSearchlist(action: any) {
  const { query, index } = action.payload;
  try {
    const res = yield call(clientAPI.searchTvShows.bind(clientAPI), query, index);
    const { results, total_pages } = res;
    yield put({
      type: FETCH_SEARCHLIST_SUCCESS,
      payload: { results, total_pages }
    });
  } catch (e) {
    yield put({
      type: FETCH_SEARCHLIST_FAILURE,
      meta: {
        type: "error",
        message: "Fail to fetch  search results."
      }
    });
  }
}

function* watcher() {
  yield all([takeLatest(FETCH_SEARCHLIST_REQUEST, fetchSearchlist)]);
}

export default watcher;
