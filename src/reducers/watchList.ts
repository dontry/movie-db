import { Show } from "../models/Show";
import {
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILURE,
  ADD_TO_WATCHLIST_SUCCESS,
  REMOVE_FROM_WATCHLIST_SUCCESS
} from "actions/watchlist";
import { RootState } from "./state";

const initialState: Show[] = [];

export default (state = initialState, action: any): Show[] => {
  switch (action.type) {
    case FETCH_WATCHLIST_SUCCESS:
      return action.payload;
    case FETCH_WATCHLIST_FAILURE:
      return [];
    case ADD_TO_WATCHLIST_SUCCESS:
      return [...state, action.payload];
    case REMOVE_FROM_WATCHLIST_SUCCESS:
      return state.filter(show => show !== action.payload.id);
    default:
      return state;
  }
};

export const selectWatchListMap = (state: RootState) => {
  const watchlist = state.watchlist;
  const map = new Map(watchlist.map(show => [show.id, show]));
  return map;
};
