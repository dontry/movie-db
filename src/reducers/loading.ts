


export default (state = false, action: any) => {
    return action.type.includes("REQUEST")
}