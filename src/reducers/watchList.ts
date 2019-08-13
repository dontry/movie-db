




const initialState = {
    entities: []
}

export default (state = initialState, action: any) => {
    switch (action.type) {

        case "reducer":
            return { ...state }

        default:
            return state
    }
}


