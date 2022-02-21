import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { successReducer } from './sucessReducer';

export const rootReducer = combineReducers({
    success: successReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;