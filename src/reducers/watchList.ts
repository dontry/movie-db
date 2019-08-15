import { Show } from "../models/Show";
import { FETCH_WATCHLIST_SUCCESS, FETCH_WATCHLIST_FAILURE } from "actions/watchlist";

const initialState: Show[] = [];

export default (state = initialState, action: any): Show[] => {
  switch (action.type) {
    case FETCH_WATCHLIST_SUCCESS:
      return action.payload;
    case FETCH_WATCHLIST_FAILURE:
      return [];
    default:
      return state;
  }
};
