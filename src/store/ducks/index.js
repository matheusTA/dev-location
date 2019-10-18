import { combineReducers } from 'redux';
import modalAddUser from './modalAddUser';
import users from './users';

const reducers = combineReducers({
  modalAddUser,
  users,
});

export default reducers;
