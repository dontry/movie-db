import { all } from "redux-saga/effects";
import userSaga from "./user";
import watchlistSaga from "./watchlist";
import searchlistSaga from "./searchlist";

export function* rootSaga() {
  yield all([userSaga(), watchlistSaga(), searchlistSaga()]);
}
