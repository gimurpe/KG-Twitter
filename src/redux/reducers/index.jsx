import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import twits from './twits';


export default combineReducers({
  users,
  twits,
  routing: routerReducer,
});