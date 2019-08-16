import { Show } from "../models/Show";
import { RootState } from "./state";
import { createSelector } from "reselect";
import { FETCH_SEARCHLIST_SUCCESS, FETCH_SEARCHLIST_FAILURE } from "actions/searchlist";
import { selectWatchListMap } from "./watchList";

export interface State {
  results: Show[];
  pages: number;
  pageIndex: number;
}

const initialState = {
  results: [],
  pages: 0,
  pageIndex: -1
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_SEARCHLIST_SUCCESS:
      const { results, total_pages } = action.payload;
      return { ...state, results, pages: total_pages };
    case FETCH_SEARCHLIST_FAILURE:
      return { ...state, results: [], pages: 0 };
    default:
      return state;
  }
};

export const getSearchResults = createSelector(
  (state: RootState) => state.searchlist.results,
  selectWatchListMap,
  (results, watchlistMap) => {
    return results.map(show => ({ ...show, watchlist: watchlistMap.has(show.id) }));
  }
);
