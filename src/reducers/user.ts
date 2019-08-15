import { User } from "../models/User";
import { FETCH_USER_DETAIL_SUCCESS, LOGOUT_SUCCESS } from "../actions/user";

export default (state: User | null = null, action: any) => {
  switch (action.type) {
    case FETCH_USER_DETAIL_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
