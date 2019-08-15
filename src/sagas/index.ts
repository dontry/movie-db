import { all } from "redux-saga/effects";
import userSaga from "./user";
import watchlistSaga from "./watchlist";

export function* rootSaga() {
  yield all([userSaga(), watchlistSaga()]);
}
