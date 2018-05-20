import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redux';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;

