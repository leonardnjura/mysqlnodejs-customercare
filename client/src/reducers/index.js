import { combineReducers } from 'redux';
import personnelReducer from './personnelReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  personnel: personnelReducer,
  task: taskReducer,
});
