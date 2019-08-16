import { Show } from "models/Show";

export const FETCH_SEARCHLIST_REQUEST = "FETCH_SEARCHLIST_REQUEST";
export const FETCH_SEARCHLIST_SUCCESS = "FETCH_SEARCHLIST_SUCCESS";
export const FETCH_SEARCHLIST_FAILURE = "FETCH_SEARCHLIST_FAILURE";

export const search = (query: string, index: number) => ({
  type: FETCH_SEARCHLIST_REQUEST,
  payload: { query, index }
});
