import { combineReducers } from 'redux';
import users from './users';
import books from './books';
import user from './user';

export default combineReducers({ users, books, user });
