import { Show } from "../models/Show"
import {
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILURE
} from "actions/watchlist";

export interface State {
  entities: Show[];
}

const initialState: State = {
  entities: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_WATCHLIST_SUCCESS:
      return { ...state, entities: action.payload.list };
    case FETCH_WATCHLIST_FAILURE:
      return { entities: [] };
    default:
      return state;
  }
};
