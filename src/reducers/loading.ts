export default (state = false, action: any) => {
  if (action.type.includes("REQUEST")) {
    return true;
  } else if (action.type.includes("SUCCESS") || action.type.includes("FAILURE")) {
    return false;
  } else {
    return state;
  }
};
