export const menuReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return action.status;
    default:
      return state;
  }
}
