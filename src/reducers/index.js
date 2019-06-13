import { combineReducers } from 'redux';

import { projectReducer } from './projectReducer';
import { menuReducer } from './menuReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  featuredProjects: projectReducer,
  loading: loadingReducer,
  error: errorReducer,
})
