import { toast } from "react-toastify";

toast.configure({ autoClose: 3000 });

export type Type = "info" | "warn" | "error" | null;

export interface State {
  type: Type;
  message: string;
}

const initialState: State = { message: "", type: null };

export default (state = initialState, action: any) => {
  if (action.meta) {
    const { message, type } = action.meta;
    (toast as any)[type](message);
    return action.meta;
  } else {
    return state;
  }
};
