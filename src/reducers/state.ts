import { User } from "../models/User";
import { State as NotificationState } from "../reducers/notification";
import { Show } from "models/Show";
export interface RootState {
  user: User | null;
  watchlist: Show[];
  loading: boolean;
  notification: NotificationState;
}
