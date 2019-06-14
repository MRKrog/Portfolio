import { combineReducers } from 'redux';

import { projectReducer } from './projectReducer';
import { currentReducer } from './currentReducer';
import { featuredReducer } from './featuredReducer';
import { menuReducer } from './menuReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  allProjects: projectReducer,
  currentProject: currentReducer,
  menu: menuReducer,
  featuredProjects: featuredReducer,
  loading: loadingReducer,
  error: errorReducer,
})
