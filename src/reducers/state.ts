import { State as WatchListState } from '../reducers/watchList'
export interface RootState {
  watchList: WatchListState;
  user: User | {};
}
