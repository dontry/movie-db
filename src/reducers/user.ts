import { User } from "../models/User";
import { FETCH_USER_DETAIL_SUCCESS } from "../actions/user";

export default (state: User | null = null, action: any) => {
  switch (action.type) {
    case FETCH_USER_DETAIL_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
