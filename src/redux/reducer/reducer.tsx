import { combineReducers } from 'redux';
// Introducing other reducer s
import TestReducer from './TestReducer';

// Merge all the introduced reducers into one reducers and expose them
export default combineReducers({
  TestReducer,
});