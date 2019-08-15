import {
  FETCH_WATCHLIST_REQUEST,
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILURE
} from "actions/watchlist";

const initialState = {
  entities: [],
  loading: false,
  error: null
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_WATCHLIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_WATCHLIST_SUCCESS:
      return { ...state, entities: action.payload.list, loading: false };
    case FETCH_WATCHLIST_FAILURE:
      return { entities: [], error: action.error, loading: false };
    default:
      return state;
  }
};
