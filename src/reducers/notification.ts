import { toast } from "react-toastify"


toast.configure({ autoClose: 3000 })

const initialState = {}
export default (state = initialState, action: any) => {
    if (action.meta) {
        const { message, type } = action.meta;
        (toast as any)[type](message)
        return action.meta;
    } else {
        return state;
    }
};
