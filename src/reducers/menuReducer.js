export const menuReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_MENU':
    console.log(action);
      return action.status;
    default:
      return state;
  }
}
