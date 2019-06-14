export const currentReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return action.currentProject;
    default:
      return state;
  }
}
