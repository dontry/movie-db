import { User } from "../models/User";
import { State as NotificationState } from "../reducers/notification";
import { State as SearchlistState } from "../reducers/searchlist";
import { Show } from "models/Show";
export interface RootState {
  user: User | null;
  watchlist: Show[];
  searchlist: SearchlistState;
  loading: boolean;
  notification: NotificationState;
}
