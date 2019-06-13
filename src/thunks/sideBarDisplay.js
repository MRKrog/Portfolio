import * as actions from '../actions/index';

export const sideBarDisplay = (status) => {
  return (dispatch) => {
    dispatch(actions.setMenu(status));
  }
}
